import express from "express";
import { Server, Socket } from "socket.io";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";

import { MessagesController } from "./messages";
import { RootController } from "./root";
import { MessageActionTypes } from "@chat-bot/types";

const port = 8000; // TODO: move to env file (install dotenv)

const configureExpressApp = (app) => {
  // TODO: move to own file
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  // register routes
  // TODO: move to own file
  app.use("/", RootController);
  app.use("/", MessagesController);
  app.use((req, res, next) => {
    res.status(404).send("Not found");
  });

  return app;
};

const expressApp = configureExpressApp(express());
const httpServer = http.createServer(expressApp);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  socket.on(MessageActionTypes.CLIENT_MESSAGE, (payload) => {
    console.log("got message: ", payload);
    socket.emit(MessageActionTypes.SERVER_MESSAGE, payload);
  });
});

// start server
httpServer.listen(port, () => {
  console.log(`Backend is running at http://localhost:${port}`);
});
