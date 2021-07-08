import { MessageInterface } from "@chat-bot/types";
import { Schema } from "mongoose";

const MessageSchema = new Schema<MessageInterface>(
  {
    // value:  String,
    value: { type: String },
    userID: String,
    sentAt: String,
  },
  { timestamps: true }
);

export { MessageSchema };
