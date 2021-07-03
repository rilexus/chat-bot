import React, { useState } from "react";
import { RoundInput } from "@chat-bot/ui";
import { Board, BoardComponentType, COMPONENT_TYPES } from "./components";

const Chat = () => {
  const [messages, setMessages] = useState<BoardComponentType[]>([
    {
      own: true,
      props: {
        id: "42",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur autem, deleniti excepturi facere hic maiores optio placeat quisquam quos rerum saepe ut, voluptatibus. Ea facere iure quisquam rerum sed!",
      },
      type: COMPONENT_TYPES.TEXT_MESSAGE,
    },
    {
      own: false,
      props: { id: "1", value: "some" },
      type: COMPONENT_TYPES.TEXT_MESSAGE,
    },
    {
      own: true,
      props: { id: "42", value: "some" },
      type: COMPONENT_TYPES.TEXT_MESSAGE,
    },
  ]);
  return (
    <div>
      <div>
        <Board boardComponents={messages} />
      </div>
      <div>
        <RoundInput type={"text"} placeholder={"Message"} />
      </div>
    </div>
  );
};

export { Chat };
