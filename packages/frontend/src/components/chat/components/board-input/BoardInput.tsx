import React, { FC, useState } from "react";
import { MessageInput, SendButton } from "./components";
import { border, BoxShadowLgCSS, colors, Flex, padding } from "@chat-bot/ui";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${colors("blue.100")};
  ${BoxShadowLgCSS};
  border-radius: ${border("radius.lg")};
  padding: ${padding("7")};
`;

const BoardInput: FC<{ onSend: (message: string) => void }> = ({ onSend }) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    value && onSend(value);
    setValue(() => "");
  };

  return (
    <Wrapper>
      <Flex alignItems={"center"}>
        <MessageInput
          value={value}
          onKeyDown={(e) => {
            const key = e.code;
            if (key === "Enter") {
              handleSend();
            }
          }}
          onChange={(e: any) => setValue(e.target.value)}
        />
        <SendButton onClick={handleSend} />
      </Flex>
    </Wrapper>
  );
};

export { BoardInput };
