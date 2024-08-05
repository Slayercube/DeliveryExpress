import { useState } from "react";

import './App.css'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import Lowerbody from './Components/Lowerbody'


function App() {
  return (
    <>
   
    <Navbar />
    <div className='body'>
     <Body />
     <Lowerbody/>

     <Itemspecs />


    </div>
    <Map />

      
    </>
  )
}

export default App;
