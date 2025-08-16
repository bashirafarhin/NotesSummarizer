// app/page.tsx
import Sidebar from "@/components/sidebar/Sidebar";
import MainContent from "@/components/main/MainContent";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <MainContent />
    </div>
  );
}
