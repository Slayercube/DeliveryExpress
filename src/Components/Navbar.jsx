import React, { useState } from 'react'
import'../index.css'

const Navbar = () => {

    const [isHoovering, setIsHoovering] = useState(false)

    const handleMouseEnter = () => {
      setIsHoovering(true)
    }
    const handleMouseLeave = () => {
      setIsHoovering(false)
    } 
  

  return (
    <div className="nav top d-flex">
      <div className="top_row_left">
        
        <img id="logo" src="./src/Images/logo.jpeg" alt="" />

      </div>
      <div className="top_row_middle">
        <div className="d-flex top_middle">
           <a href="" style={{color: isHoovering ? 'lightgray' : 'darkgray'}}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}> Home |  </a>

           <a href="" style={{color: isHoovering ? 'lightgray' : 'darkgray'}}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}> Contact | </a>

           <a href="" style={{color: isHoovering ? 'lightgray' : 'darkgray'}}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>  Rate </a>
        </div>
        <div className="bottom_middle">
            <h1>Delivery Express</h1>
        </div>
        
        </div>
      <div className="top_row_right">Login | Sign Up <i class="fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Navbar