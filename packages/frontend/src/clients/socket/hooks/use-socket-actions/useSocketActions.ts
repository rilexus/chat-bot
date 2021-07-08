import { MessageActionTypes, MessageInterface } from "@chat-bot/types";
import { useSocketDispatch } from "../../Socket";

const createSendMessageAction = (
  message: MessageInterface
): {
  type: MessageActionTypes.CLIENT_MESSAGE;
  payload: MessageInterface;
} => {
  return {
    type: MessageActionTypes.CLIENT_MESSAGE,
    payload: message,
  };
};
type Action = { type: string; [key: string]: any };
type Dispatcher = (action: Action) => void;

const dispatchSendMessageAction = (
  dispatch: Dispatcher,
  message: MessageInterface
) => {
  dispatch(createSendMessageAction(message));
};

const useSocketActions = ():{
  sendMessage: (message: MessageInterface) => void
} => {
  const dispatch = useSocketDispatch();

  return {
    sendMessage: (message: MessageInterface) => {
      dispatchSendMessageAction(dispatch, message)
    },
  };
};

export { useSocketActions };
