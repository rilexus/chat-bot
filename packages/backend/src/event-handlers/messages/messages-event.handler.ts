import { MessageActionTypes } from "@chat-bot/types";

const handleMessages = (io, socket) => {
  const handleClientMessage = (payload) => {
    console.log("got message: ", payload);
    socket.emit(MessageActionTypes.SERVER_MESSAGE, payload);
  };

  socket.on(MessageActionTypes.CLIENT_MESSAGE, handleClientMessage);
};
export { handleMessages };
