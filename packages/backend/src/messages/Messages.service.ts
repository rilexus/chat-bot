class Parser {}

class MessagesService {
  constructor(private readonly parser: Parser) {}

  async process(message: string) {}
}

export default new MessagesService(new Parser());
export { MessagesService };
