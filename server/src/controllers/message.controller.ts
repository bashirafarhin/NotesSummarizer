import { Request, Response } from "express";
import * as messageService from "../services/message.service";
import * as Aiservcie from "../services/ai.service";

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { content } = req.body;
    if (!content)
      return res.status(400).json({ error: "Message content is required" });

    // Save user message
    const userMsg = await messageService.createMessage("user", content);

    // Generate AI response
    const transcript = content;
    const aiReplyText = await Aiservcie.generateSummary({ transcript });
    const aiMsg = await messageService.createMessage("ai", aiReplyText);

    res.status(201).json({ user: userMsg, ai: aiMsg });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

export const getMessages = async (_req: Request, res: Response) => {
  try {
    const messages = await messageService.getAllMessages();
    res.json({ messages });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

export const clearChat = async (_req: Request, res: Response) => {
  try {
    await messageService.clearMessages();
    res.json({ message: "Chat cleared" });
  } catch (error) {
    res.status(500).json({ error: "Failed to clear chat" });
  }
};
