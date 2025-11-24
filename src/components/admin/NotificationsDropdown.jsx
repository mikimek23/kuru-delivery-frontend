// src/components/admin/NotificationsDropdown.jsx
import { Bell, X } from "lucide-react";

export const NotificationsDropdown=({ onClose })=>{
  return (
    <div
      className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg border border-gray-200 
      animate-dropdown z-50"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b">
        <h3 className="text-sm font-semibold">Notifications</h3>
        <button onClick={onClose}>
          <X size={18} className="text-gray-600 hover:text-black" />
        </button>
      </div>

      {/* Notification list */}
      <div className="max-h-64 overflow-y-auto p-2">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <Bell size={18} className="text-primary mt-1" />
            <div>
              <p className="text-sm font-medium">New update available</p>
              <span className="text-xs text-gray-500">2 minutes ago</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 border-t text-center text-sm text-primary cursor-pointer hover:underline">
        View all
      </div>
    </div>
  );
}
