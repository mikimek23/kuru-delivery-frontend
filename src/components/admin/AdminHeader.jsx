import { useState, useEffect, useRef } from "react";
import { Inbox, User } from "lucide-react";
import {NotificationsDropdown} from "./NotificationsDropdown";
import {ProfileDropdown} from "./ProfileDropdown";

export const AdminHeader = ({ onMobileMenu }) => {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  
  useEffect(() => {
    function handleClick(e) {
      if (
        notifRef.current && !notifRef.current.contains(e.target) &&
        profileRef.current && !profileRef.current.contains(e.target)
      ) {
        setShowNotif(false);
        setShowProfile(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex items-center gap-4 px-4 py-3 bg-white shadow-sm border-b lg:ml-16">
     
      <button
        onClick={onMobileMenu}
        className="md:hidden p-2 rounded-md hover:bg-gray-100"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className="block h-0.5 bg-gray-700" />
          <span className="block h-0.5 bg-gray-700" />
          <span className="block h-0.5 bg-gray-700" />
        </div>
      </button>

      <h1 className="text-lg font-semibold">Admin Panel</h1>

      
      <div className="ml-auto flex items-center gap-4">

       
        <div className="relative" ref={notifRef}>
          <button
            className="w-10 h-10 hidden md:flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
            onClick={(e) => {
              e.stopPropagation();
              setShowNotif(!showNotif);
              setShowProfile(false);
            }}
          >
            <Inbox size={20} />
          </button>

          {showNotif && <NotificationsDropdown onClose={() => setShowNotif(false)} />}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100"
            onClick={(e) => {
              e.stopPropagation();
              setShowProfile(!showProfile);
              setShowNotif(false);
            }}
          >
            <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={18} />
            </div>
            <span className="hidden md:block text-sm font-medium">Admin</span>
          </button>

          {showProfile && <ProfileDropdown onClose={() => setShowProfile(false)} />}
        </div>
      </div>
    </header>
  );
};
