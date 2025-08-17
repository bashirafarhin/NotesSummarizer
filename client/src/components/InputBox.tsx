"use client";

import { sendMessage } from "@/redux/reducer/message.reducer";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function InputBox() {
  const dispatch = useDispatch<AppDispatch>();
  const [msg, setMsg] = useState<string>("");

  const handleClick = () => {
    dispatch(sendMessage(msg));
    setMsg(""); // clear after sending
  };

  return (
    <div className="w-full max-w-[700px] flex items-center border border-zinc-700 rounded-full px-4 py-2 mx-auto mt-10">
      <textarea
        placeholder="Paste or upload your transcript here"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        rows={1}
        className="chat-textarea"
      />
      <button
        className="shrink-0 p-2 bg-gray-800 hover:bg-gray-900 rounded-full hover:cursor-pointer ml-2"
        onClick={handleClick}
      >
        Generate
      </button>
    </div>
  );
}
