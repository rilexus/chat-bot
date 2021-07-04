import express from "express";
import { MessagesController } from "./messages";

const getRoutes = () => {
  const router = express.Router();
  router.use(MessagesController);

  return router;
};

export { getRoutes };
