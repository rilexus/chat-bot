import { MessageActionTypes } from "@chat-bot/types";
import { useSocketDispatch } from "../../Socket";

const createSendMessageAction = (message: string) => {
  return {
    type: MessageActionTypes.CLIENT_MESSAGE,
    payload: { message: message },
  };
};
type Action = { type: string; [key: string]: any };
type Dispatcher = (action: Action) => void;

const dispatchSendMessageAction = (dispatch: Dispatcher, message: string) => {
  dispatch(createSendMessageAction(message));
};

const useSocketActions = () => {
  const dispatch = useSocketDispatch();

  return {
    sendMessage: (message: string) =>
      dispatchSendMessageAction(dispatch, message),
  };
};

export { useSocketActions };
