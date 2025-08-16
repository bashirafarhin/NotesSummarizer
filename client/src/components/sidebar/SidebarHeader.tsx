// components/sidebar/SidebarHeader.tsx
export default function SidebarHeader() {
  return (
    <div className="p-4 border-b border-gray-700">
      <button className="bg-gray-800 hover:bg-gray-700 w-full p-2 rounded-md text-left">
        + New chat
      </button>
    </div>
  );
}
