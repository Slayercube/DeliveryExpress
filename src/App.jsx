import { useState } from "react";

import './App.css'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import Lowerbody from './Components/Lowerbody'
import Itemspecs from './Components/Itemspecs'


function App() {
  return (
    <>
   
    <Navbar />
    <div className='body'>
     <Body />

     {/* <Itemspecs /> */}


    </div>
    {/* <Map /> */}

      
    </>
  )
}

export default App;
