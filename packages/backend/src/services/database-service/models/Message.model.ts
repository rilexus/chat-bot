import {MessageSchema} from "../schemas";
import {model} from 'mongoose'
import {MessageInterface} from "@chat-bot/types";

const MessageModel = model<MessageInterface>('Message', MessageSchema);

export {MessageModel}
