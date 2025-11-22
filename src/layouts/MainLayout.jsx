import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/global/Navbar';
import { Footer } from '../components/global/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col pt-20"> 
      <Navbar />

      <main className="flex-1 w-full">
        <Outlet /> 
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;