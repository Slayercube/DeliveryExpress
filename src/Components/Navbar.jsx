import React, { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {

  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(false)
  const [isMenuHidden, setMenuHidden] = useState(true)

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

    const handleHiddenMenu = () => {
      setMenuHidden(true)
    }
    const handleHiddenMenuOut = () => {
      setMenuHidden(false)
    }
    

  return (
    <div className={styles.nav}>
      <div className={styles.top_row_left}>
        
        <img id={styles.logo} src="./src/Images/logo.jpeg" alt="" />

      </div>
      <div className={styles.top_row_middle}>
        <div className={styles.top_middle}>
          <div className={styles.hovered_link}>
            <a
              href=""
              style={{ color: hoveredLink === "Home" ? "lightgray" : "darkgray" }}
              onMouseEnter={() => handleMouseEnter("Home")}
              onMouseLeave={handleMouseLeave}>Home | </a>
          </div>
          <div className={styles.hovered_link}>
            <a
              href=""
              style={{ color: hoveredLink === "Contact" ? "lightgray" : "darkgray" }}
              onMouseEnter={() => handleMouseEnter("Contact")}
              onMouseLeave={handleMouseLeave}> Contact | </a>
          </div>
          <div className={styles.hovered_link}>
            <a
              href=""
              style={{ color: hoveredLink === "Rate" ? "lightgray" : "darkgray" }}
              onMouseEnter={() => handleMouseEnter("Rate")}
              onMouseLeave={handleMouseLeave} > Rate
            </a>
          </div>
        </div>
        <div className={styles.bottom_middle}>
            <h1>Delivery Express</h1>
        </div>
        
        </div>
      <div className={styles.top_row_right}>
        <div className="">
          <div className={styles.hovered_link}>
            <a
              href=""
              style={{ color: hoveredLink === "Login" ? "lightgray" : "darkgray" }}
              onMouseEnter={() => handleMouseEnter("Login")}
              onMouseLeave={handleMouseLeave} > Login |
            </a>
          </div>
          <div className={styles.hovered_link}>
            <a
              href=""
              style={{ color: hoveredLink === "Sign Up" ? "lightgray" : "darkgray" }}
              onMouseEnter={() => handleMouseEnter("Sign Up")}
              onMouseLeave={handleMouseLeave} >  Sign Up
            </a>
          </div>
        </div>
        <div className="">
          <div className={hoveredMenu === "login_menu"? styles.hamburguer_icon_selected : styles.hamburguer_icon_unselected}
          onMouseEnter={() => handleMenuEntered("login_menu")}
          onMouseLeave={() => {
            handleMenuexit(); 
            handleHiddenMenu();}}
          onClick={handleHiddenMenuOut}>
              <i class="fa-solid fa-bars"></i>
          </div>
          <div className={isMenuHidden === true ? styles.hidden_links : styles.show_links}>
            <div className={styles.hovered_link}>
              <a
              href=""
              style={{ color: hoveredLink === "My Account" ? "lightgray" : "darkgray" }}
              onMouseEnter={() => handleMouseEnter("My Account")}
              onMouseLeave={handleMouseLeave} >My Account
              </a>
            </div>
            <div className={styles.hovered_link}>
              <a
                href=""
                style={{ color: hoveredLink === "Orders" ? "lightgray" : "darkgray" }}
                onMouseEnter={() => handleMouseEnter("Orders")}
                onMouseLeave={handleMouseLeave} >Orders
              </a>
            </div>
            <div className={styles.hovered_link}>
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
    </div>
  )
}

export default Navbar