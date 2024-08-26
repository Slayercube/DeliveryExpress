import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-lg bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-white glow-hover">Delivery Express</Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="relative px-3 py-2 rounded-md text-sm font-medium glow-hover">
                <span className="text-white">Home</span>
              </Link>
              <Link to="/about" className="relative px-3 py-2 rounded-md text-sm font-medium glow-hover">
                <span className="text-white">About</span>
              </Link>
              <Link to="/services" className="relative px-3 py-2 rounded-md text-sm font-medium glow-hover">
                <span className="text-white">Services</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/login" className="relative px-3 py-2 rounded-md text-sm font-medium glow-hover">
              <span className="text-white">Login</span>
            </Link>
            <Link to="/signup" className="relative px-3 py-2 rounded-md text-sm font-medium primary-button glow-hover">
              <span className="text-white">Sign Up</span>
            </Link>
          </div>
          <button onClick={handleMenuToggle} className="md:hidden text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;