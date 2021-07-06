import { useProxy } from "../../../../../libs/proxy";
import { chatState } from "../../chat.state";
import { useCallback } from "react";

const useChatState = () => {
  const state = useProxy(chatState);

  const addMessages = useCallback(
    (message: any) => {
      state.components = [...state.components, message];
    },
    [state.components]
  );

  return {
    components: state.components,
    addMessage: addMessages,
  };
};

export { useChatState };
