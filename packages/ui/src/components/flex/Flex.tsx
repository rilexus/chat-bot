import React, { ReactNode } from "react";

const Flex = ({
  children,
  justifyContent = "unset",
  alignItems = "unset",
}: {
  children: ReactNode;
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
        justifyContent: justifyContent,
        alignItems: alignItems,
      }}
    >
      {children}
    </div>
  );
};

export { Flex };
