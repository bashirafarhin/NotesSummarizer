import { Router } from "express";
import {
  sendMessage,
  getMessages,
  clearChat,
} from "../controllers/message.controller";

const router = Router();

router.post("/send", sendMessage); // send message
router.get("/fetchAll", getMessages); // get chat history
router.delete("/", clearChat); // clear chat

export default router;
