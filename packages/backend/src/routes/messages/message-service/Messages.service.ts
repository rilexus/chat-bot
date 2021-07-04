import { MessageDTO } from "@chat-bot/types";

class Parser {}
class Calculator {}

class MessagesService {
  constructor(
    private readonly parser: Parser,
    private readonly calculator: Calculator
  ) {}

  async process(messageDTO: MessageDTO) {
    console.log(messageDTO);
  }
}

export default new MessagesService(new Parser(), new Calculator());
export { MessagesService };
