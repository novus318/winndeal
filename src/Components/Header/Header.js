import React, { useState } from 'react'
import logoColor from '../../Images/logo-color.png';
import logo from '../../Images/logo.png';
import "./Header.css"
import {  Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';
import { motion } from "framer-motion"
function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 420) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
     <div>
    <Navbar
     expanded={expand}
     fixed="top"
     expand="md"
     className={navColour ? "navcolor" : "navbar"}
    >
      <Navbar.Brand ><Link to ='/'><motion.img initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6 }} className='logo' src={navColour ? logo :logoColor} alt='logo'/></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"
      onClick={() => {
        updateExpanded(expand ? false : "expanded");
      }}><MDBIcon className={navColour ? 'nav-toggle-color' : 'nav-toggle'} fas icon="bars"size='lg' /></Navbar.Toggle>
      <Navbar.Collapse  id="responsive-navbar-nav">
      
        <motion.div 
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}className='ms-auto'>
        <Nav >
        <Link className={navColour ?'nav-li-color me-3':'nav-li me-3'} to='/'>HOME</Link>
        <Link className={navColour ?'nav-li-color me-4':'nav-li me-4'}  to='/about'>ABOUT</Link>
        <Link className={navColour ?'nav-li-color me-4':'nav-li me-4'} to='/product-services'>PRODUCT & SERVICES</Link>
        <Link className={navColour ?'nav-li-ask-color me-3':'nav-li-ask me-3'}  to='/contact'>Ask FOR A QUOTE</Link>
        </Nav>
        </motion.div> 
      </Navbar.Collapse>
    </Navbar>
    </div>
    </>
  )
}

export default Header
