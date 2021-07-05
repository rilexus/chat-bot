import React, { FC } from "react";
import { BoardRow, ComponentFactory } from "./components";
import { BoardComponentType } from "@chat-bot/types";
import styled from "styled-components";
import { padding } from "@chat-bot/ui";

const BoardWrapper = styled.div`
  padding-bottom: ${padding("5")};
`;

const Board: FC<{ boardComponents: BoardComponentType[] }> = ({
  boardComponents,
}) => {
  return (
    <BoardWrapper>
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
    </BoardWrapper>
  );
};

export { Board };
