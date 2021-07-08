import React from "react";
const Flex = ({ children, style, justifyContent = "unset", alignItems = "unset", direction = "row", }) => {
    return (React.createElement("div", { style: Object.assign({ display: "flex", flexDirection: direction, justifyContent: justifyContent, alignItems: alignItems }, style) }, children));
};
export { Flex };
