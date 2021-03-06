import React, { FC } from "react";
import { Message } from "../message";
import { BoardComponentType, COMPONENT_TYPES } from "@chat-bot/types";

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

export { ComponentFactory };
