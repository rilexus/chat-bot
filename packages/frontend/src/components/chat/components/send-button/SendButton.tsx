import React, { ButtonHTMLAttributes, FC } from "react";
import { ArrowUpIcon, RoundButton } from "@chat-bot/ui";

const SendButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <RoundButton {...props}>
      <ArrowUpIcon />
    </RoundButton>
  );
};

export { SendButton };
