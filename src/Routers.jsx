import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Vehicles from './Components/Vehicles.jsx'

const Routers = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/body' element={<Vehicles />} />
       
      </Routes>
    
    </>
   
    
  )
}

export default Routers