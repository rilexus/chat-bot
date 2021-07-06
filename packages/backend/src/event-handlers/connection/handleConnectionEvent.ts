import { Server, Socket } from "socket.io";
import { MessageActionTypes } from "@chat-bot/types";

const handleConnectionEvent = (io: Server, socket: Socket) => {
  const timeoutId = setTimeout(() => {
    socket.emit(MessageActionTypes.SERVER_MESSAGE, {
      message:
        'You can calculate values by typing "(1+1)" or see the history of previous 10 calculation by typing "history".',
    });
  }, 2000);
};

export { handleConnectionEvent };
