// src/layouts/AdminLayout.jsx
import React, { useState } from "react";

import {AdminHeader} from "../components/admin/AdminHeader";
import { Sidebar } from "../components/admin/Sidebar";
import { Outlet } from "react-router-dom";

export const AdminLayout =() => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return ( 
    <div className="min-h-screen  bg-gray-50 flex flex-1   ">
      {/* Sidebar (desktop + mobile) */}
      
     <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} className=' fixed'/>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <AdminHeader onMobileMenu={() => setMobileOpen(true)} />

        <main className="min-h-screen py-4 md:p-10 overflow-auto shadow-lg m-1 w-screen">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}
