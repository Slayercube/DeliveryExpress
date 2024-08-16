import { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import '../app.css';
=======
import App from '../App';
>>>>>>> 47c0e89af1c62128865d05e167e1a86c2c0b2adb

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

<<<<<<< HEAD
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-lg bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-white glow-hover">Express</Link>
=======
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(false)
  const [isMenuHidden, setMenuHidden] = useState(true)
  const [isSubMenuHidden, setSubMenuHidden] = useState(true)

    const handleMenuEntered = (menu) =>{
      setHoveredMenu(menu)
    }
    const handleMenuexit = () =>{
      setHoveredMenu(false)
    }
    const handleMouseEnter = (link) => {
      setHoveredLink(link);
    };
    const handleMouseLeave = () => {
      setHoveredLink(null);
    };      
    const handleSubMenu = (menuH, subMenuH) => {
      if(menuH === false && subMenuH === false){
        setMenuHidden(!isMenuHidden)
        setSubMenuHidden(!isSubMenuHidden)
      }
    }
    
/*`${styles.description} ${styles.yellow}` */

  return (
    <div className={styles.nav}>
       <div className={styles.top_row_left}> 
        
        <img id={styles.logo} src="./src/Images/logo.jpeg" alt="" />

      </div>
      <div className={styles.top_row_middle}>
        <div className={styles.top_middle}>
          <div className={hoveredMenu === "Home"? styles.hovered_link : styles.unhovered_link}
          onMouseEnter={() => {
            handleMenuEntered("Home")
            setHoveredLink("Home")
          }}
          onMouseLeave={() => {
            handleMenuexit()
            setHoveredLink(false)
          }}
          >
            <div
              href="" className={hoveredLink === "Home" ? styles.hovered_raw_link : styles.unhovered_raw_link}>
             <Link to='/'>Home</Link>
              </div>

          </div>
          <div className={hoveredMenu === "Contact"? styles.hovered_link : styles.unhovered_link}
          onMouseEnter={() => {
            handleMenuEntered("Contact")
            setHoveredLink("Contact")
          }}
          onMouseLeave={() => {
            setHoveredLink(false)
            handleMenuexit()
          }}
          >
            <Link to="/Contact" className={hoveredLink === "Contact" ? styles.hovered_raw_link : styles.unhovered_raw_link}> Contact</Link>
          </div>
          <div className={hoveredMenu === "Rate"? styles.hovered_link : styles.unhovered_link}
          onMouseEnter={() => {
            handleMenuEntered("Rate")
            setHoveredLink("Rate")
          }}
          onMouseLeave={() => {
            setHoveredLink(false)
            handleMenuexit()
          }}
          >
             <Link to="/Rate" className={hoveredLink === "Rate" ? styles.hovered_raw_link : styles.unhovered_raw_link}>Rate </Link>
          </div>
        </div>
        <div className={styles.bottom_middle}>
            <h1>Delivery Express</h1>
        </div>
        
        </div>
      <div className={styles.top_row_right}>
        <div className={styles.top_login_left}>
          <div className={hoveredMenu === "Login"? styles.hovered_link_login : styles.unhovered_link_login}
          onMouseEnter={() => {
            handleMenuEntered("Login")
            setHoveredLink("Login")
          }}
          onMouseLeave={() => {
            setHoveredLink(false)
            handleMenuexit()
          }}
          >
            <Link to="/Login" className={hoveredLink === "Login" ? styles.hovered_raw_link : styles.unhovered_raw_link}>Login </Link>
          </div>
          <div className={hoveredMenu === "SignUp"? styles.hovered_link_login : styles.unhovered_link_login}
          onMouseEnter={() => {
            handleMenuEntered("SignUp")
            setHoveredLink("SignUp")
          }}
          onMouseLeave={() => {
            setHoveredLink(false)
            handleMenuexit()
          }}
          >
            <Link to="/Signup" className={hoveredLink === "SignUp" ? styles.hovered_raw_link : styles.unhovered_raw_link}>Sign Up</Link>
          </div>
        </div>
        <div className={styles.top_login_right}
          onMouseLeave={() => {
          handleSubMenu(isMenuHidden,isSubMenuHidden)
          }
        }
        >
          <div className={hoveredMenu === "login_menu"? styles.hamburguer_icon_selected : styles.hamburguer_icon_unselected}
            onMouseEnter={() => handleMenuEntered("login_menu")}
            onMouseLeave={() => handleMenuexit()}
            onClick={() => {
              setMenuHidden(!isMenuHidden)
              setSubMenuHidden(!isSubMenuHidden)
              }}>
                <i className="fa-solid fa-bars"></i>
          </div>
          <div className={isMenuHidden === true ? styles.hidden_links : styles.show_links}>
            <div className={hoveredMenu === "MyAccount"? styles.hovered_link_submenu : styles.unhovered_link_submenu}
            onMouseEnter={() => {
              handleMenuEntered("MyAccount")
              setHoveredLink("MyAccount")
            }}
            onMouseLeave={() => {
              setHoveredLink(false)
              handleMenuexit()
            }}>
              <a
              href="" className={hoveredLink === "MyAccount" ? styles.hovered_raw_link : styles.unhovered_raw_link}>My Account
              </a>
>>>>>>> 47c0e89af1c62128865d05e167e1a86c2c0b2adb
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