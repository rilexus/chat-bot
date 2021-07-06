import { proxy } from "../../../libs/proxy";
import { COMPONENT_TYPES } from "@chat-bot/types";

const chatState = proxy({
  components: [],
});

export { chatState };
