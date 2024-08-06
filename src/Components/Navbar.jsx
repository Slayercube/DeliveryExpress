import React, { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {

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
            <a
              href="" className={hoveredLink === "Home" ? styles.hovered_raw_link : styles.unhovered_raw_link}>Home</a>
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
            <a
              href="" className={hoveredLink === "Contact" ? styles.hovered_raw_link : styles.unhovered_raw_link}> Contact</a>
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
            <a
              href="" className={hoveredLink === "Rate" ? styles.hovered_raw_link : styles.unhovered_raw_link}>Rate
            </a>
          </div>
        </div>
        <div className={styles.bottom_middle}>
            <h1>Delivery Express</h1>
        </div>
        
        </div>
      <div className={styles.top_row_right}>
        <div className={styles.top_login_left}>
          <div className={hoveredMenu === "Login"? styles.hovered_link_login : styles.unhovered_link_login}
          onMouseEnter={() => handleMenuEntered("Login")}
          onMouseLeave={() => handleMenuexit()}
          >
            <a
              href=""
              style={{ color: hoveredLink === "Login" ? "lightgray" : "darkgray" }}
              onMouseEnter={() => handleMouseEnter("Login")}
              onMouseLeave={handleMouseLeave} >Login
            </a>
          </div>
          <div className={hoveredMenu === "Signup"? styles.hovered_link_login : styles.unhovered_link_login}
          onMouseEnter={() => handleMenuEntered("Signup")}
          onMouseLeave={() => handleMenuexit()}
          >
            <a
              href=""
              style={{ color: hoveredLink === "Sign Up" ? "lightgray" : "darkgray" }}
              onMouseEnter={() => handleMouseEnter("Sign Up")}
              onMouseLeave={handleMouseLeave} >Sign Up
            </a>
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
                <i class="fa-solid fa-bars"></i>
          </div>
          <div className={isMenuHidden === true ? styles.hidden_links : styles.show_links}>
            <div className={styles.hovered_link_submenu}>
              <a
              href=""
              style={{ color: hoveredLink === "My Account" ? "lightgray" : "darkgray" }}
              onMouseEnter={() => handleMouseEnter("My Account")}
              onMouseLeave={handleMouseLeave} >My Account
              </a>
            </div>
            <div className={styles.hovered_link_submenu}>
              <a
                href="" 
                onMouseEnter={() => handleMouseEnter("Orders")}
                onMouseLeave={handleMouseLeave} >Orders
              </a>
            </div>
            <div className={styles.hovered_link_submenu}>
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