import React, { useEffect } from "react";
import { Theme } from "./components";
import { Chat } from "./components/chat";

const post = (path: string, body: object) =>
  fetch(path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

const App = () => {
  useEffect(() => {
    post("http://localhost:8000/message", {
      message: 42,
    })
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <div>
      <Theme>
        <Chat />
      </Theme>
    </div>
  );
};

export { App };
