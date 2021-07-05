import React, { FC, useCallback } from "react";
import { Board } from "./components";
import { BoardInput } from "./components/board-input/BoardInput";
import { useChatState } from "./state/hooks/use-chart-state";
import {
  COMPONENT_TYPES,
  BoardComponentType,
  MessageActionTypes,
} from "@chat-bot/types";
import { useSocketDispatch, useSocketOn } from "../../clients";
import styled from "styled-components";
import { colors, Flex, padding } from "@chat-bot/ui";
import { Layout } from "./components/layout";

const useBoardController = (): [
  BoardComponentType[],
  { sendMessage: (message: string) => void }
] => {
  const state = useChatState();
  const dispatch = useSocketDispatch();

  useSocketOn(MessageActionTypes.SERVER_MESSAGE, (payload) => {
    state.components = [
      ...state.components,
      {
        own: false,
        props: { id: "22", value: payload.message },
        type: COMPONENT_TYPES.TEXT_MESSAGE,
      },
    ];
  });

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

      dispatch({
        type: MessageActionTypes.CLIENT_MESSAGE,
        payload: { message: message },
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
    <Layout
      board={<Board boardComponents={components} />}
      input={<BoardInput onSend={handleSend} />}
    />
  );
};

export { Chat };
