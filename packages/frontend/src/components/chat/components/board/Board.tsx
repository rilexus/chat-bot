import React, { FC } from "react";
import { BoardComponentType } from "../../types";
import { BoardRow, ComponentFactory } from "./components";

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
