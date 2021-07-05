import React, { FC } from "react";
import styled from "styled-components";
import { border, colors, padding, font, boxShadow } from "@chat-bot/ui";

const StyledBaseMessage = styled.div`
  display: inline-block;
  border-radius: ${border("radius.2xl")};
  padding: ${padding("5")} ${padding("7")};
  font-family: ${font("sans")};
  box-shadow: ${boxShadow("basis")};
`;

const StyledOwnMessage = styled(StyledBaseMessage)`
  background-color: ${colors("blue.400")};
  color: ${colors("gray.100")};
  text-align: right;
`;

const StyledForeignMessage = styled(StyledBaseMessage)`
  color: ${colors("gray.900")};
  text-align: left;
  background-color: ${colors("gray.200")};
`;

const Message: FC<{ text: string; own: boolean }> = ({ text, own }) => {
  return own ? (
    <StyledOwnMessage>{text}</StyledOwnMessage>
  ) : (
    <StyledForeignMessage>{text}</StyledForeignMessage>
  );
};

export { Message };
