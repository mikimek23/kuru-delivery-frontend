
//import { useState } from "react";
//import { Login } from "./pages/Login"
//import { Signup } from "./pages/Signup";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AuthSwitch } from "./components/auth/AuthSwitch";
function App() {

  return (
    <div className="font-sans">

      <AuthSwitch/>
      <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App
