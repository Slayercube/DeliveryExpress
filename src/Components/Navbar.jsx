import { useState, useEffect, useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const { setUser, getUserInfoFromToken } = useContext(myContext)
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
    console.log(dropdownOpen)
  }

  const handleMouseLeave = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget)
    ) {
      setDropdownOpen(false)
    }
  }

  useEffect(() => {
    const dropdownElement = dropdownRef.current

    if (dropdownElement) {
      dropdownElement.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (dropdownElement) {
        dropdownElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [dropdownOpen])

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const user = await getUserInfoFromToken(token)
          if (user) {
            setIsLoggedIn(true)
            setUserInfo(user)
            setUser(user)
          }
        } catch (error) {
          console.error('Error fetching user info:', error)
        }
      }
    }

    fetchUserInfo()
  }, [setUser])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    setUserInfo(null)
    setUser(null)
    navigate('/')
  }

  const handleProfile = () => {
    navigate('/profile')
  }

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded=""
              aria-label="Toggle nagivation"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="navbarImage me-3">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dzfrjt8bq/image/upload/v1724851783/delivery_Express_navbar_logo_black_bg_mkwdga.png"
                  alt="logo of a speed vehicle"
                  className="h-14 w-14"
                />
              </Link>
            </div>

            <div className="flex flex-shrink-0">
              <Link
                to="/"
                className={`header my-2 text-lg font-bold text-white ${styles.header}`}
              >
                Express
              </Link>
            </div>

            <div className="">
              {/* about and services dropdown */}
              <button className="dropDown hidden sm:ml-6 sm:block">
                <div className="ms-4 flex space-x-7">
                  <Link
                    to="/"
                    className="glow-hover relative rounded-md py-3 text-sm font-medium"
                  >
                    <span className="text-white">Home</span>
                  </Link>
                  <Link
                    to="/about"
                    className="glow-hover relative rounded-md py-3 text-sm font-medium"
                  >
                    <span className="text-white">About</span>
                  </Link>
                  <Link
                    to="/services"
                    className="glow-hover relative rounded-md py-3 text-sm font-medium"
                  >
                    <span className="text-white">Services</span>
                  </Link>
                  <Link
                    to="/contactUs"
                    className="glow-hover relative rounded-md py-3 text-sm font-medium"
                  >
                    <span className="text-white">Contact Us</span>
                  </Link>
                </div>
              </button>
            </div>
          </div>
          <div className="md:flex md:items-center md:space-x-4">
            {isLoggedIn ? (
              <div className="relative">
                {/* userName when logged in starts*/}
                <button
                  onClick={toggleDropdown}
                  className={`rounded-5 relative ms-2 mt-1 flex transform items-center px-3 py-2 text-sm font-medium transition duration-300 ease-in-out ${styles.userProfileButton}`}
                >
                  {userInfo.userName}
                  <FontAwesomeIcon icon={faChevronDown} className="ml-3" />
                </button>
                {/* userName when logged in ends*/}

                {dropdownOpen && (
                  <div className="rounded-bottom-5 animate-fade-in-down absolute right-0 z-20 mt-2 w-48 bg-gray-800 shadow-lg">
                    <button
                      onClick={handleProfile}
                      className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      Account
                    </button>
                    <button className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-700">
                      Support
                    </button>
                    <button className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-700">
                      <Link to="/orders">Orders </Link>
                    </button>
                    <div className="border-t border-gray-100"></div>
                    <button
                      onClick={handleLogout}
                      className={`rounded-bottom-5 block w-full px-4 py-2 text-sm text-white ${styles.logout}`}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-5 relative mx-2.5 py-2 font-medium"
                >
                  <span className="text-white">Login</span>
                </Link>
                <Link to="/register" className="py-2 font-medium">
                  <span
                    className={`btn rounded-5 text-white ${styles.navSignupButton}`}
                  >
                    Sign up
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      {menuOpen && (
      <div className="sm:hidden" id="navbarNav">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
          {isLoggedIn ? (
            <div>
              <button
                onClick={handleProfile}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Account
              </button>
              <button
                onClick={handleLogout}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Login
              </Link>
              <Link to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    )}
    </nav>
  )
}

export default Navbar
