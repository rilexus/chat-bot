import React, { FC, useEffect, useRef } from "react";
import { BoardRow, ComponentFactory } from "./components";
import { BoardComponentType } from "@chat-bot/types";
import styled from "styled-components";
import { padding } from "@chat-bot/ui";

const BoardWrapper = styled.div`
  padding-bottom: 15vh;
  padding-left: ${padding("5")};
  padding-right: ${padding("5")};
  overflow-y: scroll;
`;

const Board: FC<{ boardComponents: BoardComponentType[] }> = ({
  boardComponents,
}) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      //@ts-ignore
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [boardComponents, ref]);

  return (
    <BoardWrapper ref={ref}>
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
    </BoardWrapper>
  );
};

export { Board };
