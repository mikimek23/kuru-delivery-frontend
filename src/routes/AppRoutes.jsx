import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 

// === LAYOUTS ===
import MainLayout from "../layouts/MainLayout";
import { AdminLayout } from "../layouts/AdminLayout"; 

import {Home} from "../pages/Home";
import About from "../pages/About";    
import FAQ from "../pages/FAQ";          
import {Services} from "../pages/Services";
import {Pricing} from "../pages/Pricing"; 
import {TrackOrder} from "../pages/TrackOrder";
import {Contact} from "../pages/Contact"; 

import {Login} from "../pages/Login";
import {Signup} from "../pages/Signup";
import {AdminLogin} from "../pages/admin/AdminLogin";

import {Dashboard}from "../pages/admin/Dashboard"; 
import {Orders} from "../pages/admin/Orders";
import {Users} from "../pages/admin/Users";
import {Payments} from "../pages/admin/Payments";

import ProtectedRoute from "../components/auth/ProtectedRoute";
import {AuthSwitch} from "../components/auth/AuthSwitch"; 

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        
      
        <Route element={<MainLayout />}> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route 
            path="/profile" 
            element={<ProtectedRoute requiredRole="user"><p>User Profile</p></ProtectedRoute>} 
          />
        </Route>

     
        <Route path="/adminlogin" element={<AdminLogin />} />

       
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
        
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
          <Route path="payments" element={<Payments />} />
        </Route>

      
        <Route path="*" element={
            <div className="min-h-screen pt-20 flex flex-col items-center justify-center bg-orange-50 dark:bg-neutral-900">
                <h1 className="text-7xl font-extrabold text-orange-600">404</h1>
                <p className="text-xl text-gray-700 dark:text-neutral-300 mt-4">Page Not Found</p>
                <Link to="/" className="mt-6 text-white bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">Go to Homepage</Link>
            </div>
        } />

      </Routes>
    </Router>
  );
};