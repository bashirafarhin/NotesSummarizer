// components/sidebar/SidebarChats.tsx
const chats = [
  "View LinkedIn Anonymously",
  "Email draft creation",
  "LinkedIn search tips",
  "Promise handling differences",
  "CUET rank and scorecard",
];

export default function SidebarChats() {
  return (
    <div className="flex-1 overflow-y-auto p-2">
      <h2 className="text-sm text-gray-400 mb-2">Chats</h2>
      {chats.map((chat) => (
        <div
          key={chat}
          className="truncate p-2 rounded-md hover:bg-gray-800 cursor-pointer"
        >
          {chat}
        </div>
      ))}
    </div>
  );
}
