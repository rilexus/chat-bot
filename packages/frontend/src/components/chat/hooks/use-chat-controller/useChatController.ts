import { useCallback } from "react";
import {
  BoardComponentType,
  COMPONENT_TYPES,
  MessageActionTypes,
} from "@chat-bot/types";
import { useChatState } from "../../state/hooks";
import { useSocketActions, useSocketOn } from "../../../../clients/socket";

const useOnServerMessage = (
  callback: (...args: any /* TODO: type this */) => void
) => {
  useSocketOn(MessageActionTypes.SERVER_MESSAGE, callback);
};

const useChatController = (): [
  BoardComponentType[],
  { sendMessage: (message: string) => void }
] => {
  const { addMessage: addMessageToState, components } = useChatState();
  const { sendMessage: sendSocketMessage } = useSocketActions();

  useOnServerMessage((payload) => {
    payload.forEach(({ value }: any /* TODO: type this */) => {
      addMessageToState({
        own: false,
        props: { id: "22", value: value },
        type: COMPONENT_TYPES.TEXT_MESSAGE,
      });
    });
  });

  const sendMessage = useCallback(
    (message: string) => {
      addMessageToState({
        // TODO: change to array of messages
        own: true,
        props: { id: "22", value: message },
        type: COMPONENT_TYPES.TEXT_MESSAGE,
      });
      sendSocketMessage({
        // TODO: change to array of messages
        value: message,
        userID: "userID here",
        sentAt: new Date().toISOString(),
      });
    },
    [addMessageToState]
  );

  return [components, { sendMessage }];
};
export { useChatController };
