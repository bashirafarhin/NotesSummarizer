import { Mic, AudioLines } from "lucide-react";

export default function InputBox() {
  return (
    <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-[500px]">
      <input
        type="text"
        placeholder="Ask anything"
        className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
      />
      <button className="p-2 hover:bg-gray-700 rounded-full">
        <Mic size={18} />
      </button>
      <button className="p-2 hover:bg-gray-700 rounded-full">
        <AudioLines size={18} />
      </button>
    </div>
  );
}
