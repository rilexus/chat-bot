import { MessageActionTypes, MessageInterface } from "@chat-bot/types";
import { Server, Socket } from "socket.io";
import { messageService } from "./services";

const emitServerMessage = (socket: Socket, payload: { value: string }[]) => {
  socket.emit(MessageActionTypes.SERVER_MESSAGE, payload);
};

const handleMessages = async (io: Server, socket: Socket) => {
  const handleClientMessage = async (
    // handle the socket client_message event
    payload: MessageInterface /* TODO: validate this */
  ) => {
    try {
      // delegate the message to a service
      const results = await messageService.processNewMessage(payload);
      if (results.length > 0) {
        emitServerMessage(socket, results);
        //
      }
    } catch (e) {
      emitServerMessage(socket, [{ value: e.message }]);
    }
  };

  // subscribe to socket event
  socket.on(MessageActionTypes.CLIENT_MESSAGE, handleClientMessage);
};
export { handleMessages };
