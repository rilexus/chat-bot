import { MessageActionTypes } from "@chat-bot/types";
import { Server, Socket } from "socket.io";

const handleMessages = (io: Server, socket: Socket) => {
  const handleClientMessage = (payload) => {
    console.log("got message: ", payload);
    socket.emit(MessageActionTypes.SERVER_MESSAGE, payload);
  };

  socket.on(MessageActionTypes.CLIENT_MESSAGE, handleClientMessage);
};
export { handleMessages };
