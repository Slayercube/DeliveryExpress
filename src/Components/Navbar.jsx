import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const { setUser, getUserInfoFromToken } = useContext(myContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const user = await getUserInfoFromToken(token);
          if (user) {
            setIsLoggedIn(true);
            setUserInfo(user);
            setUser(user);
          }
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      }
    };

    fetchUserInfo();
  }, [setUser]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserInfo(null);
    setUser(null);
    navigate('/');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleMenuToggle = () => {
    // Your menu toggle logic here
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={handleMenuToggle} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-lg font-bold">Brand</Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link to="/about" className="relative px-3 py-2 rounded-md text-sm font-medium glow-hover">
                  <span className="text-white">About</span>
                </Link>
                <Link to="/services" className="relative px-3 py-2 rounded-md text-sm font-medium glow-hover">
                  <span className="text-white">Services</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
          {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="relative px-3 py-2 rounded-md text-sm font-medium text-white bg-secondary hover:bg-secondary-dark transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
                >
                  {userInfo.userName}
                  <FontAwesomeIcon icon={faChevronDown} className="ml-3" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-20 animate-fade-in-down">
                    <button
                      onClick={handleProfile}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700 w-full text-left"
                    >
                      Account
                    </button>
                    <button className="block px-4 py-2 text-sm text-white hover:bg-gray-700 w-full text-left">
                      Support
                    </button>
                    <button className="block px-4 py-2 text-sm text-white hover:bg-gray-700 w-full text-left">
                      Active Item
                    </button>
                    <div className="border-t border-gray-100"></div>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-700 w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="relative px-3 py-2 rounded-md text-sm font-medium glow-hover">
                  <span className="text-white">Login</span>
                </Link>
                <Link to="/register" className="relative px-3 py-2 rounded-md text-sm font-medium glow-hover">
                  <span className="btn btn-primary text-white">Sign up</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;