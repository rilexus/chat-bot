import React from 'react';
import { RoundInput } from "@chat-bot/ui";

const Chat = () => {
	return (
		<div>
			Chat
			<RoundInput type={"text"} placeholder={'Message'}/>
		</div>
	);
};

export {Chat};
