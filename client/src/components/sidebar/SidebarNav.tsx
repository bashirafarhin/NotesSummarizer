// components/sidebar/SidebarNav.tsx
const items = ["Search chats", "Library", "Sora", "GPTs"];

export default function SidebarNav() {
  return (
    <nav className="p-2">
      {items.map((item) => (
        <div
          key={item}
          className="p-2 rounded-md hover:bg-gray-800 cursor-pointer"
        >
          {item}
        </div>
      ))}
    </nav>
  );
}
