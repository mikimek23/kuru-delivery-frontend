import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminLayout } from '../layouts/AdminLayout'
import { Dashboard } from '../pages/admin/Dashboard'
import { Orders } from '../pages/admin/Orders'
import { Users } from '../pages/admin/Users'
import { Payments } from '../pages/admin/Payments'
import { Content } from '../pages/admin/Content'
import { Analytics } from '../pages/admin/Analytics'
import { AdminLogin } from '../pages/admin/AdminLogin'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/admin' element={<AdminLayout/>}>
      <Route path='dashboard'element={<Dashboard/>}></Route>
      <Route path='orders' element={<Orders/>}></Route>
      <Route path='users' element={<Users/>}></Route>
      <Route path='payments' element={<Payments/>}></Route>
      <Route path='contect' element={<Content/>}></Route>
      <Route path='analytics' element={<Analytics/>}></Route>
      <Route path='login' element={<AdminLogin/>}></Route>
      </Route>
      
    </Routes>
    </BrowserRouter>
  )
}
