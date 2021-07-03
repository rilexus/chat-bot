import React, { FC } from "react";
import { Message, BoardRow } from "./components";

enum COMPONENT_TYPES {
  TEXT_MESSAGE = "TEXT_MESSAGE",
}

type BoardComponentType = {
  own: boolean; // TODO: find better key
  props: {
    id: string;
    value: string;
  };
  type: COMPONENT_TYPES;
};

const ComponentFactory: FC<{ component: BoardComponentType }> = ({
  component,
}) => {
  switch (component.type) {
    case COMPONENT_TYPES.TEXT_MESSAGE: {
      return <Message text={component.props.value} own={component.own} />;
    }
    default: {
      console.warn(
        `Component type: ${component.type} does not exist!` /* TODO: add better message */
      );
      return null;
    }
  }
};

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
export type { BoardComponentType };
export { Board, COMPONENT_TYPES };
