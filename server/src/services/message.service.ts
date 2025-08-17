import Message, { IMessage } from "../models/message.model";

export const createMessage = async (
  role: "user" | "ai",
  content: string
): Promise<IMessage> => {
  const msg = new Message({ role, content });
  return msg.save();
};

export const getAllMessages = async (): Promise<IMessage[]> => {
  return Message.find().sort({ createdAt: 1 });
};

export const clearMessages = async (): Promise<void> => {
  await Message.deleteMany({});
};
