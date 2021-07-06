import { MessageActionTypes } from "@chat-bot/types";
import { Server, Socket } from "socket.io";
import { MathService } from "./services/math-service";

const emitServerMessage = (socket: Socket, payload: { message: string }) => {
  socket.emit(MessageActionTypes.SERVER_MESSAGE, payload);
};

const handleMessages = (io: Server, socket: Socket) => {
  const handleClientMessage = (payload /* TODO: type this AND validate */) => {
    const { message } = payload;

    try {
      const result = MathService.evaluate([
        "(",
        "(",
        "(",
        "2",
        "*",
        "2",
        ")",
        "+",
        "1",
        ")",
        "-",
        "1",
        ")",
      ]);
      console.log(message);
      emitServerMessage(socket, { message: `${result}` });
    } catch (e) {
      console.log(e);
      emitServerMessage(socket, { message: e.message });
    }

    // emitServerMessage(socket, payload);
  };

  socket.on(MessageActionTypes.CLIENT_MESSAGE, handleClientMessage);
};
export { handleMessages };
