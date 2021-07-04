import React, { FC, useCallback } from "react";
import { Board } from "./components";
import { BoardInput } from "./components/board-input/BoardInput";
import { useChatState } from "./state/hooks/use-chart-state";
import { messageClient as client } from "../../clients/message-client";
import { COMPONENT_TYPES, BoardComponentType } from "@chat-bot/types";

const useBoardController = (
  { messageClient } = { messageClient: client }
): [BoardComponentType[], { sendMessage: (message: string) => void }] => {
  const state = useChatState();

  const sendMessage = useCallback(
    (message: string) => {
      state.components = [
        ...state.components,
        {
          own: true,
          props: { id: "22", value: message },
          type: COMPONENT_TYPES.TEXT_MESSAGE,
        },
      ];
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
    },
    [state]
  );

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
