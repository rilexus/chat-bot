import { Flex, padding } from "@chat-bot/ui";
import React, { FC } from "react";
import styled from "styled-components";

const Padding = styled.div`
  padding: ${padding("4")} 0;
`;

const BoardRow: FC<{ direction: "left" | "right" }> = ({
  children,
  direction = "left",
}) => {
  return (
    <Padding>
      <Flex justifyContent={direction === "right" ? "flex-end" : "flex-start"}>
        {children}
      </Flex>
    </Padding>
  );
};
export { BoardRow };
