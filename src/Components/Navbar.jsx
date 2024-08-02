import React from 'react'
import'../index.css'

const Navbar = () => {
  return (
<<<<<<< HEAD
    <div>
      <nav className='fixed top-0 w-full bg-blue-500 p-4'>
        <ul className='flex justify-around'>
          <li className='text-white'>Home</li>
          <li className='text-white'>About</li>
          <li className='text-white'>Contact</li>
        </ul>
      </nav>
=======
    <div className="nav top d-flex">
      <div className="top_row_left">
        
        <img id="logo" src="./src/Images/logo.jpeg" alt="" />

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
>>>>>>> 29a591207179148627ad7904e99ea653cfbc16c8
    </div>
  )
}

export default Navbar