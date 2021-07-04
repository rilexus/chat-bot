import { httpClient, HttpClient } from "../http-client";

class MessageClient {
  constructor(private readonly httpClient: HttpClient) {}

  async sendMessage(message: string) {
    return this.httpClient.post("http://localhost:8000/message", {
      message: message,
    });
  }
}

export { MessageClient };
export default new MessageClient(httpClient);
