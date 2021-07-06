import React, { FC } from "react";
import { Board } from "./components";
import { BoardInput } from "./components/board-input/BoardInput";
import { Layout } from "./components/layout";
import { useChatController } from "./hooks/use-chat-controller";

const Chat: FC = () => {
  const [components, { sendMessage }] = useChatController();
  const handleSend = (message: string) => {
    sendMessage(message);
  };

  return (
    <Layout
      board={<Board boardComponents={components} />}
      input={<BoardInput onSend={handleSend} />}
    />
  );
};

export { Chat };
