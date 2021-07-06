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
import { useCallbackRef } from "../../hooks";

const SocketContext = createContext(null);

const useSocketDispatch = () => {
  const { dispatch } = useContext(SocketContext);
  return dispatch;
};

const useSocketContext = () => useContext(SocketContext);

const useSocketOn = (
  event: string,
  callback: (payload: { [key: string]: any }) => void
) => {
  const callbackRef = useCallbackRef(callback);

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
    const connect = () => setSetConnected(true);
    const disconnect = () => setSetConnected(false);
    socketRef.current.on("connect", connect);
    socketRef.current.on("disconnect", connect);
    socketRef.current.on("connect_error", disconnect);
    return () => {
      socketRef.current.off("connect", connect);
      socketRef.current.off("connect_error", disconnect);
      socketRef.current.off("disconnect", disconnect);
    };
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

export {
  SocketProvider,
  useSocketDispatch,
  useSocketOn,
  connectSocket,
  useSocketContext,
};
