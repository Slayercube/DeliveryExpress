import React from 'react'
import'../index.css'

const Navbar = () => {
  return (
    <div className="nav top d-flex">
      <div className="top_row_left">
        
        <img src="https://placehold.co/200x150" alt="" />

      </div>
      <div className="top_row_middle">
        <div className="top_middle">
            Home | Contact | Rate
        </div>
        <div className="bottom_middle">
            <h1>Delivery Express</h1>
        </div>
        
        </div>
      <div className="top_row_right">Login | Sign Up!</div>
    </div>
  )
}

export default Navbar