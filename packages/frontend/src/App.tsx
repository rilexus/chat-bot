import React from "react";
import { Theme, Chat } from "./components";
import { SocketProvider } from "./clients/socket/Socket";

const App = () => {
  return (
    <div>
      <SocketProvider>
        <Theme>
          <Chat />
        </Theme>
      </SocketProvider>
    </div>
  );
};

export { App };
