// components/sidebar/SidebarFooter.tsx
export default function SidebarFooter() {
  return (
    <div className="p-4 border-t border-gray-700">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
          B
        </div>
        <div>
          <p className="text-sm font-semibold">BASHIRA FARHIN</p>
          <p className="text-xs text-gray-400">Free</p>
        </div>
      </div>
    </div>
  );
}
