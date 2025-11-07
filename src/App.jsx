
//import { useState } from "react";
import { Login } from "./pages/Login"
//import { Signup } from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AuthSwitch } from "./components/auth/AuthSwitch";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { Services } from "./pages/Services";
import { Dashboard } from "./pages/admin/Dashboard";
import { Home } from "./pages/Home";

function App() {
  
  return (
    <div className="font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/adminlogin" element={<AdminLogin/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<AuthSwitch/>}></Route>
          <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><Dashboard/></ProtectedRoute>}></Route>
          <Route path="/services" element={<ProtectedRoute><Services/></ProtectedRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App
