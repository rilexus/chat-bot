import databaseService, {
  DatabaseService,
} from "../../../../services/database-service/Database.service";
import { mathService, MathService } from "../math-service";
import { MessageInterface } from "@chat-bot/types";

interface MessageServiceInterface {
  saveMessage(message: { value: string }): Promise<any>;
}

class CommandService {
  constructor(private readonly mathService: MathService) {}

  async isCommand(value: string): Promise<boolean> {
    return true;
  }

  async process(command: string): Promise<string | number> {
    return this.mathService.evaluate(command);
  }
}

class MessageService implements MessageServiceInterface {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly commandService: CommandService
  ) {}

  async processNewMessage(message: MessageInterface): Promise<string> {
    try {
      // TODO: check if this is a known command
      const value = await this.commandService.process(message.value);
      // TODO: save calculation result to DB or cache

      await this.saveMessage(message);
      return `${value}`;
    } catch (e) {}
  }

  async saveMessage(message: MessageInterface): Promise<any> {
    return this.databaseService.saveMessage(message);
  }
}

export default new MessageService(
  databaseService,
  new CommandService(mathService)
);
export { MessageService };
