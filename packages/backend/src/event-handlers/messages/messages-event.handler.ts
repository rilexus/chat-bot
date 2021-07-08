import { MessageActionTypes, MessageInterface } from "@chat-bot/types";
import { Server, Socket } from "socket.io";
import { messageService } from "./services";

const emitServerMessage = (socket: Socket, payload: { value: string }) => {
  socket.emit(MessageActionTypes.SERVER_MESSAGE, payload);
};

const handleMessages = async (io: Server, socket: Socket) => {
  const handleClientMessage = async (
    payload: MessageInterface /* TODO: validate this */
  ) => {
    try {
      const result = await messageService.processNewMessage(payload);
      if (!!result || result === "0") {
        emitServerMessage(socket, { value: `${result}` });
      }
    } catch (e) {
      console.log(e);
      emitServerMessage(socket, { value: e.message });
    }
  };

  socket.on(MessageActionTypes.CLIENT_MESSAGE, handleClientMessage);
};
export { handleMessages };
