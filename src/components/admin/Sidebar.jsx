import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BarChart, Contact, Home, ListOrdered, LogOutIcon, Settings, User, Wallet } from "lucide-react";
import logo from '../../assets/images/kurulogo2.png'
const menuItems = [
  { label: "Dashboard", path: "/admin/dashboard", icon: <Home size={20} /> },
  { label: "Orders", path: "/admin/orders", icon: <ListOrdered size={20} /> },
  { label: "Users", path: "/admin/users", icon: <User size={20} /> },
  { label: "Payments", path: "/admin/payments", icon: <Wallet size={20} /> },
  { label: "Content", path: "/admin/contect", icon: <Contact size={20} /> },
  { label: "Analytics", path: "/admin/analytics", icon: <BarChart size={20} /> },
];

export const Sidebar=({ mobileOpen, setMobileOpen })=> {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isExpanded = pinned || hovered;

  return (
    <>
      
      <div
        className={`h-screen w-56 fixed left-0 top-0  text-white overflow-y-auto   flex items-center gap-4 px-4 py-3 shadow-sm border-b inset-0 bg-black/50 z-40 md:hidden transition-opacity 
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`
          bg-primary text-white h-screen transition-all duration-300 z-50
          
          /* Desktop width behavior */
          hidden md:block md:fixed md:top-0 md:left-0
          ${isExpanded ? "w-56" : "w-16"}
        `}
        onMouseEnter={() => !pinned && setHovered(true)}
        onMouseLeave={() => !pinned && setHovered(false)}
      >
        
        <div className="flex items-center gap-3 p-4 font-bold text-lg">
          <div className="w-8 h-8 bg-white rounded-md"><img src={logo} alt="logo" className="w-6 m-auto mt-0.5" /></div>
          {isExpanded && <span>Kuru Admin</span>}
        </div>

        
        <nav className="mt-4 flex flex-col gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition-colors
                ${isActive ? "bg-white/50 text-black/70" : "hover:bg-white/10"}`
              }
            >
              <div className="w-6 h-6 bg-white/40 rounded-sm text-black text-center content-center justify-items-center ">{item.icon}</div>
              {isExpanded && <span className="text-md font-bold">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        
        <div className="absolute bottom-4 left-0  px-4 flex flex-col gap-2">
          <button className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-white/10">
            <div className="w-6 h-6 bg-white/40 rounded-sm text-black"><Settings/></div>
            {isExpanded && <span className="text-md font-bold">Settings</span>}
          </button>

          <button className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-white/10">
            <div className="w-6 h-6 bg-white/40 rounded-sm text-black"><LogOutIcon/></div>
            {isExpanded && <span className="text-md font-bold">Logout</span>}
          </button>
        </div>

        
         <button
        className={`absolute left-12 top-10 w-6 h-6 bg-primary text-white rounded-full shadow-md flex items-center justify-center ${hovered||pinned?'left-54 transition-all duration-300':'left-13 transition-all duration-300'}`}
        onClick={() => setPinned(!pinned)}
      >
        {pinned ? "<" : ">"}
      </button>
      </div>

      
      <div
        className={`
          fixed inset-y-0 left-0 z-50 bg-primary text-white p-4 w-56 transform transition-transform duration-300
          md:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        
        <div className="flex items-center justify-between pb-4 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-md"><img src={logo} alt="logo" className="w-6 m-auto mt-0.5" /></div>
            <span className="font-bold text-lg">Kuru Admin</span>
          </div>
          <button onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        
        <nav className="mt-4 flex flex-col gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition-colors
                ${isActive ? "bg-white/50 text-black/70" : "hover:bg-white/10"}`
              }
            >
              <div className="w-6 h-6 bg-white/40 rounded-sm text-black text-center content-center justify-items-center ">{item.icon}</div>
              <span className="text-md font-bold">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        
        <div className="mt-6 flex flex-col gap-2">
          <button className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-white/10">
            <div className="w-6 h-6 bg-white/40 rounded-sm text-black"><Settings/></div>
            <span className="text-md font-bold">Settings</span>
          </button>

          <button className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-white/10">
            <div className="w-6 h-6 bg-white/40 rounded-sm text-black"><LogOutIcon/></div>
            <span className="text-md font-bold">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}
