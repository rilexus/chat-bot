import express from "express";
import { body } from "./validation";
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
  (req, res) => {
    console.log(req.body);
    res.json({ data: "Messages POST" });
  }
);

export { MessagesController };
