import React, { FC } from "react";
import styled from "styled-components";
import { colors, Flex } from "@chat-bot/ui";

const BackgroundColor = styled.div`
  background-color: ${colors("blue.200")};
`;

const Layout: FC<any> = ({ board, input }) => {
  return (
    <BackgroundColor
      style={{
        height: "100vh",
      }}
    >
      <Flex
        justifyContent={"flex-end"}
        direction={"column"}
        style={{
          height: "100vh",
        }}
      >
        {board}
      </Flex>
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "1rem",
          width: "calc(100% - 2rem)",
        }}
      >
        {input}
      </div>
    </BackgroundColor>
  );
};

export { Layout };
