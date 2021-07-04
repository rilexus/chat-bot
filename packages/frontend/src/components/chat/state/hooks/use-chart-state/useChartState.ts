import {useProxy} from "../../../../../libs/proxy";
import {chatState} from "../../chat.state";

const useChatState = () => {
	return useProxy(chatState);
};

export { useChatState }
