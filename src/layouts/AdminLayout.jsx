
import React, { useState } from "react";

import {AdminHeader} from "../components/admin/AdminHeader";
import { Sidebar } from "../components/admin/Sidebar";
import { Outlet } from "react-router-dom";

export const AdminLayout =() => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return ( 
    <div className="min-h-screen  bg-gray-50 flex flex-1   ">
      
      
     <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} className=' fixed'/>

      
      <div className="flex-1 flex flex-col">
        <AdminHeader onMobileMenu={() => setMobileOpen(true)} />

        <main className="text-center md:text-center mt-4 min-h-1/2 px-4 sm:px-6 lg:px-8 py-1">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}
