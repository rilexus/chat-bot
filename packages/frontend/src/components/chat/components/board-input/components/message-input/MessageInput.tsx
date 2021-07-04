import React, { FC, InputHTMLAttributes } from "react";
import { RoundInput } from "@chat-bot/ui";

const MessageInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <RoundInput {...props} type={"text"} placeholder={"Message"} />;
};

export { MessageInput };
