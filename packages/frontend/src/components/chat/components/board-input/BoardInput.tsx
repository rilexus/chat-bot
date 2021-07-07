import React, { KeyboardEvent, FC, SyntheticEvent, useState } from "react";
import { MessageInput, SendButton } from "./components";
import { border, BoxShadowLgCSS, colors, Flex, padding } from "@chat-bot/ui";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${colors("blue.100")};
  ${BoxShadowLgCSS};
  border-radius: ${border("radius.lg")};
  padding: ${padding("7")};
`;

const createEvent = ({ value }: { value: string }) => ({
  target: { value: value },
});

const BoardInput: FC<{
  onSend: (event: { target: { value: string } }) => void;
}> = ({ onSend }) => {
  const [value, setValue] = useState("");

  const send = () => {
    value && onSend(createEvent({ value: value }));
    setValue(() => "");
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    send();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.code;
    if (key === "Enter") {
      send();
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Flex alignItems={"center"}>
          <MessageInput
            value={value}
            name={"message-input"}
            onKeyDown={handleKeyDown}
            onChange={(e: any) => setValue(e.target.value)}
          />
          <SendButton type={"submit"} />
        </Flex>
      </form>
    </Wrapper>
  );
};

export { BoardInput };
