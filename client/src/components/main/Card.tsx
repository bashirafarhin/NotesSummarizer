import React, { useState } from "react";
import ReceiptSender from "./ReceiptSender";

export interface Message {
  _id: string;
  content: string;
  role: string;
  createdAt: string;
}

interface CardProps {
  msg: Message;
}

const Card: React.FC<CardProps> = ({ msg }) => {
  const [text, setText] = useState(msg.content);

  return (
    <div
      key={msg._id}
      className="max-w-[700px] w-full border border-zinc-700 rounded-md shadow-sm whitespace-pre-line p-2"
    >
      <textarea
        className="p-3 w-full bg-transparent outline-none resize-none"
        value={text}
        rows={text.split("\n").length}
        onChange={(e) => setText(e.target.value)}
        disabled={msg.role == "user"}
      />

      {msg.role === "ai" && <ReceiptSender messageId={msg._id} />}
    </div>
  );
};

export default Card;
