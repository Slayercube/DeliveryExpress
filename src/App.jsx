import { useState } from "react";

import './App.css'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
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
    <Cards/>

      
    </>
  )
}

export default App;
