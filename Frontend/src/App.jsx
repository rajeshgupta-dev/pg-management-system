import React from 'react'
import AdminRegister from './pages/admin/adminRegister'
import { Route, Router, Routes } from 'react-router-dom'
import LoginPage from './pages/admin/LoginPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminLogin from './pages/admin/AdminLogin'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/admin-login' element={<LoginPage />} /> */}
        <Route path='/admin-register' element={<AdminRegister />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />


      </Routes>

    </>
  )
}

export default App