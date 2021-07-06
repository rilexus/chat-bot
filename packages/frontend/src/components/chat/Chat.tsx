import React, { FC } from "react";
import { Board } from "./components";
import { BoardInput } from "./components/board-input/BoardInput";
import { Layout } from "./components/layout";
import { useChatController } from "./hooks/use-chat-controller";
import styled from "styled-components";
import { border, BoxShadowLgCSS, colors, padding } from "@chat-bot/ui";

const ModalWrapper = styled.div`
  background-color: ${colors("white.100")};
  ${BoxShadowLgCSS};
  padding: ${padding("8")};
  border-radius: ${border("radius.3xl")};
`;

const Modal: FC<any> = ({ render }) => {
  return <ModalWrapper>{render()}</ModalWrapper>;
};

const OfflinePil = () => {
  // TODO: add translation
  return <div>You are offline!</div>;
};

const Chat: FC = () => {
  const [components, { sendMessage }] = useChatController();
  const handleSend = (message: string) => {
    sendMessage(message);
  };

  return (
    <Layout
      modal={<Modal render={() => <OfflinePil />} />}
      board={<Board boardComponents={components} />}
      input={<BoardInput onSend={handleSend} />}
    />
  );
};

export { Chat };
