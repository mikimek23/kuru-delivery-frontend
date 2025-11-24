
import { LogOut, Settings, User } from "lucide-react";

export const ProfileDropdown=()=> {
  return (
    <div
      className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 
      animate-dropdown z-50"
    >
      <div className="p-3 flex items-center gap-3 border-b">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <User size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold">Admin</p>
          <p className="text-xs text-gray-500">admin@kuru.com</p>
        </div>
      </div>

      <div className="flex flex-col py-1">
        <button
          className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100"
        >
          <Settings size={18} /> Settings
        </button>

        <button
          className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100"
        >
          <User size={18} /> Profile
        </button>

        <button
          className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
}
