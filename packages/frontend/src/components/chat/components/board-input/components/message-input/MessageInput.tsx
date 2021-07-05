import React, { FC, InputHTMLAttributes } from "react";
import { margin, StyledRoundInput } from "@chat-bot/ui";
import styled from "styled-components";

const FullWidthRoundInput = styled(StyledRoundInput)`
  flex-grow: 1;
  margin: ${margin("3")};
`;

const MessageInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <FullWidthRoundInput {...props} type={"text"} placeholder={"Message"} />
  );
};

export { MessageInput };
