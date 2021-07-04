import React, { FC } from "react";
import { BoardRow, ComponentFactory } from "./components";
import { BoardComponentType } from "@chat-bot/types";

const Board: FC<{ boardComponents: BoardComponentType[] }> = ({
  boardComponents,
}) => {
  return (
    <div>
      {boardComponents.map((component, idx) => {
        return (
          <BoardRow
            direction={component.own ? "right" : "left"}
            key={`message-${idx}`}
          >
            <ComponentFactory component={component} />
          </BoardRow>
        );
      })}
    </div>
  );
};

export { Board };
