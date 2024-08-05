import { useState } from 'react'



import './App.css'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import Lowerbody from './Components/Lowerbody'


function App() {


  return (
    <div className="main_frame">
    <Navbar />
     <Body />
     <Lowerbody/>

      
    </div>
  )
}

export default App;
