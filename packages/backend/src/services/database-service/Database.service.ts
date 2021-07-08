import mongoose from "mongoose";
import { MessageInterface } from "@chat-bot/types";
import { MessageSchema } from "./schemas";
const { model } = mongoose;

const MessageModel = model<MessageInterface>("Message", MessageSchema);

const DATABASE_USER_NAME = "root";
const DATABASE_PASSWORD = "example";
const DATABASE_ADDRESS = `mongodb://${DATABASE_USER_NAME}:${DATABASE_PASSWORD}@localhost:27017`;

class DatabaseService {
  constructor() {
    mongoose.connect(DATABASE_ADDRESS /* TODO: move to .env file. */, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Database connection error:"));
    db.once("open", function () {
      console.log(`Connected to the database at: ${DATABASE_ADDRESS}`);
    });
  }

  async saveMessage(message: MessageInterface) {
    const Message = new MessageModel(message);
    return Message.save();
  }
}
export default new DatabaseService();
export { DatabaseService };
