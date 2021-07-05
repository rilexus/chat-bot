import React, { ButtonHTMLAttributes, FC } from "react";
import { ArrowUpIcon, RoundButton, useThemeColor } from "@chat-bot/ui";

const SendButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const blue400 = useThemeColor("blue.400");
  return (
    <RoundButton
      {...props}
      style={{
        backgroundColor: blue400,
        ...props.style,
      }}
    >
      <ArrowUpIcon colorPath={"white.100"} />
    </RoundButton>
  );
};

export { SendButton };
