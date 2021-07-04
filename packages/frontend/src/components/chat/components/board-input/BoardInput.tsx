import React, { FC, useState } from "react";
import { MessageInput, SendButton } from "./components";
import { Flex } from "@chat-bot/ui";

const BoardInput: FC<{ onSend: (message: string) => void }> = ({ onSend }) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    onSend(value);
    setValue(() => "");
  };

  return (
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
  );
};

export { BoardInput };
