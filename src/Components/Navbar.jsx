import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const { setUser, getUserInfoFromToken } = useContext(myContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    console.log(dropdownOpen)
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
            <button onClick={handleMenuToggle} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              type='button'
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle nagivation">
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

            <div className="navbarImage me-3">
              <Link to="/">
                <img src='https://res.cloudinary.com/dzfrjt8bq/image/upload/v1724851783/delivery_Express_navbar_logo_black_bg_mkwdga.png'
                  alt='logo of a speed vehicle'
                  className='h-14 w-14' />
              </Link>

            </div>

            <div className="flex-shrink-0 flex">
              <Link to="/" className={`text-white header my-2 text-lg font-bold ${styles.header}`}>Express</Link>
            </div>



            <div className=''>
              {/* about and services dropdown */}
              <button className="hidden dropDown sm:block sm:ml-6">
                <div className="flex space-x-7 ms-4">
                  <Link to="/" className="relative  py-3  rounded-md text-sm font-medium glow-hover">
                    <span className="text-white ">Home</span>
                  </Link>
                  <Link to="/about" className="relative  py-3 rounded-md text-sm font-medium glow-hover">
                    <span className="text-white">About</span>
                  </Link>
                  <Link to="/services" className="relative  py-3 rounded-md text-sm font-medium glow-hover">
                    <span className="text-white">Services</span>
                  </Link>
                  <Link to="/contactUs" className="relative py-3 rounded-md text-sm font-medium glow-hover">
                    <span className="text-white">Contact Us</span>
                  </Link>
                </div>
              </button>
            </div>



          </div>
          <div className=" md:flex md:items-center md:space-x-4">
            {isLoggedIn ? (
              <div className="relative">


                {/* userName when logged in starts*/}
                <button
                  onClick={toggleDropdown}
                  className={`relative px-3 py-2 rounded-5 ms-2 mt-1 text-sm font-medium  transition duration-300 ease-in-out transform  flex items-center ${styles.userProfileButton}`}
                >
                  {userInfo.userName}
                  <FontAwesomeIcon icon={faChevronDown} className="ml-3" />
                </button>
                {/* userName when logged in ends*/}


                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-bottom-5 shadow-lg  z-20 animate-fade-in-down">
                    <button
                      onClick={handleProfile}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700 w-full"
                    >
                      Account
                    </button>
                    
                    <button className="block px-4 py-2 text-sm text-white hover:bg-gray-700 w-full">
                      Support
                    </button>
                    <button className="block  px-4 py-2 text-sm text-white hover:bg-gray-700 w-full">
                      <Link to='/orders'>Orders   </Link>
                    </button>
                    <div className="border-t border-gray-100"></div>
                    <button
                      onClick={handleLogout}
                      className={`block px-4 py-2 text-sm text-white rounded-bottom-5 w-full ${styles.logout}`}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="relative py-2 mx-2.5 rounded-5 font-medium">
                  <span className="text-white">Login</span>
                </Link>
                <Link to="/register" className=" py-2 font-medium">
                  <span className={`btn text-white rounded-5 ${styles.navSignupButton}`}>Sign up</span>
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