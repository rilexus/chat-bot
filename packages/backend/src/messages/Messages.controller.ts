import express from "express";
import { body } from "./validation";
import { messageService } from "./message-service";
const MessagesController = express.Router();

MessagesController.get("/message", (req, res) => {
  res.json({ data: "Messages GET" });
});

MessagesController.post(
  "/message",
  body(
    /* Use this instead: <https://www.npmjs.com/package/express-validation> */
    "message"
  ).isString,
  async (req, res) => {
    const messageDTO = req.body;
    const p = await messageService.process(messageDTO);
    res.json(req.body);
  }
);

export { MessagesController };
