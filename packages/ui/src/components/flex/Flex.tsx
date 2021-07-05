import React, { CSSProperties, ReactNode } from "react";

const Flex = ({
  children,
  style,
  justifyContent = "unset",
  alignItems = "unset",
  direction = "row",
}: {
  children: ReactNode;
  style?: CSSProperties;
  direction?: "row" | "column";
  justifyContent?:
    | "unset"
    | "center"
    | "space-between"
    | "flex-start"
    | "flex-end";
  alignItems?: "center" | "unset";
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export { Flex };
