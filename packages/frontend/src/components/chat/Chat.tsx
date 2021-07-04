import React, { FC } from "react";
import { Board } from "./components";
import { BoardInput } from "./components/board-input/BoardInput";
import { useChatState } from "./state/hooks/use-chart-state";
import { COMPONENT_TYPES } from "./enums";
import { messageClient } from "../../clients/message-client";
import { BoardComponentType } from "./types";

const useBoardController = (): [
  BoardComponentType[],
  { sendMessage: (message: string) => void }
] => {
  const state = useChatState();

  const sendMessage = (message: string) => {
    messageClient.sendMessage(message).then((res) => {
      state.components = [
        ...state.components,
        {
          own: false,
          props: { id: "22", value: res.message },
          type: COMPONENT_TYPES.TEXT_MESSAGE,
        },
      ];
    });
  };

  return [state.components, { sendMessage }];
};

const Chat: FC = () => {
  const [components, { sendMessage }] = useBoardController();

  const handleSend = (message: string) => {
    sendMessage(message);
  };

  return (
    <div>
      <div>
        <Board boardComponents={components} />
      </div>
      <div>
        <BoardInput onSend={handleSend} />
      </div>
    </div>
  );
};

export { Chat };
