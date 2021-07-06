import React, { FC } from "react";
import styled from "styled-components";
import { colors, Flex } from "@chat-bot/ui";
import { useSocketContext } from "../../../../clients/socket";

const BackgroundColor = styled.div`
  background-color: ${colors("blue.200")};
`;

const Layout: FC<any /* TODO: Type this */> = ({ board, input, modal }) => {
  const { connected } = useSocketContext();

  return (
    <BackgroundColor
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          transition: "top 700ms",
          left: "50%",
          transform: "translateX(-50%)",
          top: !connected ? "3rem" : "-5rem",
        }}
      >
        {modal}
      </div>
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
