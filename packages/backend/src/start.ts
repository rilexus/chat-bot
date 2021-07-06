import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import {handleConnectionEvent, handleMessages} from "./event-handlers";

function errorMiddleware(error, req, res, next) {
  if (res.headersSent) {
    next(error);
  } else {
    console.error(error);
    res.status(500);
    res.json({
      message: error.message,
      // we only add a `stack` property in non-production environments
      ...(process.env.NODE_ENV === "production"
        ? null
        : { stack: error.stack }),
    });
  }
}

function setupCloseOnExit(server) {
  // https://stackoverflow.com/a/14032965/971592
  async function exitHandler(options = {}) {
    await server
      .close()
      .then(() => {
        console.log("Server successfully closed");
      })
      .catch((e) => {
        console.warn("Something went wrong closing the server", e.stack);
      });

    // @ts-ignore
    if (options.exit) {
      process.exit();
    }
  }

  // do something when app is closing
  process.on("exit", exitHandler);

  // catches ctrl+c event
  process.on("SIGINT", exitHandler.bind(null, { exit: true }));

  // catches "kill pid" (for example: nodemon restart)
  process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
  process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));

  // catches uncaught exceptions
  process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
}

function startServer() {
  const port = 8000; // TODO: move to env file (install dotenv)

  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  app.use(errorMiddleware);

  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  const onConnection = (socket: Socket) => {
    // add more handlers here
    handleMessages(io, socket);
  };

  io.on("connection", (socket:Socket) => {
    handleConnectionEvent(io, socket)
    onConnection(socket)
  });

  return new Promise((resolve) => {
    // start server
    httpServer.listen(port, () => {
      console.log(`Backend is running at http://localhost:${port}`);

      // monkey patch
      const originalClose = httpServer.close.bind(httpServer);

      //@ts-ignore
      httpServer.close = () => {
        return new Promise((resolveClose) => {
          originalClose(resolveClose);
        });
      };
    });

    setupCloseOnExit(httpServer);
    resolve(httpServer);
  });
}

export { startServer };
