import React, { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {

  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(false)
  const [isMenuHidden, setMenuHidden] = useState(true)

    const handleMenuEntered = () =>{
      setHoveredMenu(true)
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

    const handleHiddenMenu = () => {
      setMenuHidden(!isMenuHidden)
    }
    

  return (
    <div className={styles.nav}>
      <div className={styles.top_row_left}>
        
        <img id={styles.logo} src="./src/Images/logo.jpeg" alt="" />

      </div>
      <div className={styles.top_row_middle}>
        <div className={hoveredMenu === true ? styles.top_middle_hovered : styles.top_middle_unhovered}
        onMouseEnter={handleMenuEntered}
        onMouseLeave={handleMenuexit}>
        <a
          href=""
          style={{ color: hoveredLink === "Home" ? "lightgray" : "darkgray" }}
          onMouseEnter={() => handleMouseEnter("Home")}
          onMouseLeave={handleMouseLeave}>Home | </a>

        <a
          href=""
          style={{ color: hoveredLink === "Contact" ? "lightgray" : "darkgray" }}
          onMouseEnter={() => handleMouseEnter("Contact")}
          onMouseLeave={handleMouseLeave}> Contact | </a>

        <a
          href=""
          style={{ color: hoveredLink === "Rate" ? "lightgray" : "darkgray" }}
          onMouseEnter={() => handleMouseEnter("Rate")}
          onMouseLeave={handleMouseLeave} > Rate
        </a>
        </div>
        <div className={styles.bottom_middle}>
            <h1>Delivery Express</h1>
        </div>
        
        </div>
      <div className={styles.top_row_right}>
        <div className="">
        <a
          href=""
          style={{ color: hoveredLink === "Login" ? "lightgray" : "darkgray" }}
          onMouseEnter={() => handleMouseEnter("Login")}
          onMouseLeave={handleMouseLeave} > Login |
        </a>
        
        <a
          href=""
          style={{ color: hoveredLink === "Sign Up" ? "lightgray" : "darkgray" }}
          onMouseEnter={() => handleMouseEnter("Sign Up")}
          onMouseLeave={handleMouseLeave} >  Sign Up
        </a>
         
        </div>
        <div className="">
          <div className={styles.hamburguer_icon}
          onClick={handleHiddenMenu}>
              <i class="fa-solid fa-bars"></i>
          </div>
          <div className="hidden_links">
              <a
              href=""
              style={{ color: hoveredLink === "My Account" ? "lightgray" : "darkgray" }}
              onMouseEnter={() => handleMouseEnter("My Account")}
              onMouseLeave={handleMouseLeave} >My Account
              </a><br></br>
              <a
                href=""
                style={{ color: hoveredLink === "Orders" ? "lightgray" : "darkgray" }}
                onMouseEnter={() => handleMouseEnter("Orders")}
                onMouseLeave={handleMouseLeave} >Orders
              </a><br></br>
              <a
                href=""
                style={{ color: hoveredLink === "Messages" ? "lightgray" : "darkgray" }}
                onMouseEnter={() => handleMouseEnter("Messages")}
                onMouseLeave={handleMouseLeave} >Messages
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar