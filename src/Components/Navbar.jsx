import React from 'react'
import'../index.css'

const Navbar = () => {
  return (
    <div>
      <nav className='fixed top-0 w-full bg-blue-500 p-4'>
        <ul className='flex justify-around'>
          <li className='text-white'>Home</li>
          <li className='text-white'>About</li>
          <li className='text-white'>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar