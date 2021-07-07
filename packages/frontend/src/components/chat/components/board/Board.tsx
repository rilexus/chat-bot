import React, { FC, useEffect, useRef } from "react";
import { BoardRow, ComponentFactory } from "./components";
import { BoardComponentType } from "@chat-bot/types";
import styled, { css } from "styled-components";
import { padding } from "@chat-bot/ui";

const ScrollBarNoneCSS = css`
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BoardWrapper = styled.div`
  padding-bottom: 15vh;
  padding-left: ${padding("5")};
  padding-right: ${padding("5")};
  overflow-y: scroll;
  ${ScrollBarNoneCSS};
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
    <BoardWrapper ref={ref} id={"Board"}>
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
