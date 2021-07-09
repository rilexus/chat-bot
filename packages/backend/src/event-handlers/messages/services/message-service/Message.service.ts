import databaseService, {
  DatabaseService,
} from "../../../../services/database-service/Database.service";
import { mathService, MathService } from "../math-service";
import { MessageInterface } from "@chat-bot/types";
import { Socket } from "socket.io";

interface MessageServiceInterface {
  saveMessage(message: { value: string }): Promise<any>;
}

class CommandService {
  constructor(
    private readonly mathService: MathService,
    private readonly databaseService: /* TODO: consider removing DB service from here */ DatabaseService
  ) {}

  async isCommand(message: MessageInterface): Promise<boolean> {
    const COMMAND_PREFIX = "!";
    return message.value.split("")[0] === COMMAND_PREFIX; /* is command */
  }

  async process(command: string): Promise<any /* TODO: add types */[]> {
    // TODO: abstract this logic

    const v = command.replace("!", "");
    if (v === "history" /* TODO: move to enum */) {
      return (await this.databaseService.findHistory()).slice(0, 10);
    }

    return [{ value: this.mathService.evaluate(v) }];
  }
}

class MessageService implements MessageServiceInterface {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly commandService: CommandService
  ) {}

  async processNewMessage(
    message: MessageInterface
  ): Promise<any[] /* TODO: add types */> {
    try {
      await this.saveMessage(message);
      if (await this.commandService.isCommand(message)) {
        return await this.commandService.process(message.value);
      }

      return [];
    } catch (e) {
      //TODO: handle error
    }
  }

  async saveMessage(message: MessageInterface): Promise<any> {
    return this.databaseService.saveMessage(message);
  }
}

export default new MessageService(
  databaseService,
  new CommandService(mathService, databaseService)
);
export { MessageService };
