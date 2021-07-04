import React, { useEffect, useState } from "react";
import { RoundButton, RoundInput } from "@chat-bot/ui";
import { Board, BoardComponentType, COMPONENT_TYPES } from "./components";
import { proxy, useProxy } from "../../libs";

const state = proxy({ inputValue: "some" });

const Chat = () => {
  const s = useProxy(state);

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
        <RoundInput
          type={"text"}
          placeholder={"Message"}
          value={s.inputValue}
          onChange={(e: any) => (state.inputValue = e.target.value)}
        />
        <RoundButton>Send</RoundButton>
      </div>
    </div>
  );
};

export { Chat };
