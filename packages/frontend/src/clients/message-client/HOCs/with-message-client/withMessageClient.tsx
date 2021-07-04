import React from "react";
import { messageClient } from "../../index";

const withMessageClient = (Component: any) => {
  return (props: { [key: string]: any }) => {
    // provide client function to the component
    return (
      <Component
        {...props}
        sendMessage={(message: string) => messageClient.sendMessage(message)}
      />
    );
  };
};
export { withMessageClient };
