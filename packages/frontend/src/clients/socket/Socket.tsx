import React, {
  ComponentType,
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import socketIOClient from "socket.io-client";

const SocketContext = createContext(null);

const useSocketDispatch = () => {
  const { dispatch } = useContext(SocketContext);
  return dispatch;
};

const useSocketOn = (
  event: string,
  callback: (payload: { [key: string]: any }) => void
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on(event, callbackRef.current);
    return () => {
      socket.off(event, callbackRef.current);
    };
  }, [socket, event, callbackRef]);
};

const SocketProvider: FC = ({ children }) => {
  const SOCKET_ENDPOINT = "http://localhost:8000";
  const socketRef = useRef(socketIOClient(SOCKET_ENDPOINT));
  const [connected, setSetConnected] = useState(false);

  useEffect(() => {
    socketRef.current.on("connect", () => {
      setSetConnected(true);
    });
    socketRef.current.on("disconnect", () => {
      setSetConnected(false);
    });
  }, [socketRef]);

  const dispatch = (action: any) => {
    socketRef.current.emit(action.type, action.payload);
  };

  return (
    <SocketContext.Provider
      value={{
        socket: socketRef.current,
        dispatch: dispatch,
        connected: connected,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

const connectSocket = (
  mapSocketToProps: (
    dispatch: (action: {
      type: string;
      payload?: { [key: string]: string };
    }) => void
  ) => { [key: string]: (...args: any) => void }
) => {
  return (Component: ComponentType) => {
    return (props: any) => {
      const dispatch = useSocketDispatch();
      const handlers = mapSocketToProps(dispatch);
      return <Component {...props} {...handlers} />;
    };
  };
};

export { SocketProvider, useSocketDispatch, useSocketOn, connectSocket };
