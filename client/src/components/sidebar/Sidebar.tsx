// components/sidebar/Sidebar.tsx
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import SidebarChats from "./SidebarChats";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black border-r border-gray-700 flex flex-col">
      <SidebarHeader />
      <SidebarNav />
      <SidebarChats />
      <SidebarFooter />
    </aside>
  );
}
