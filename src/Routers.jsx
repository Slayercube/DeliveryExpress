import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'

const Routers = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        {/* <Route path='/' element={<App />} /> */}
      </Routes>
    
    </>
   
    
  )
}

export default Routers