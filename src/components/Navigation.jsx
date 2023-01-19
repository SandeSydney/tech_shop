import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <Navbar className='navbar-main' expand="lg">
      {/* <div className='navbar-main'> */}
      <Navbar.Brand className='logo'>
        <Link className='logo-link' to={"/"}>
          <img src="" alt="" />
          Aoracom Systems Limited
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="aoracom-navbar-nav" />
      <Navbar.Collapse id="aoracom-navbar-nav">
        <Nav className='nav-items'>
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/services">Services</Link>
          <Link className='nav-link' to="/about-us">About Us</Link>
          <Link className='nav-link' to="/contact-us">Contact Us</Link>
        </Nav>

      </Navbar.Collapse>

      {/* <div className='nav-items'>
        <p><Link className='nav-link' to={"/"}>Home</Link></p>
        <p><Link className='nav-link' to={"/services"}>Our Services</Link></p>
        <p><Link className='nav-link' to={"/about-us"}>About Us</Link></p>
        <p><Link className='nav-link' to={"/contact-us"}>Contact Us</Link></p>
      </div> */}
      {/* </div> */}
    </Navbar>

  )
}

export default Navigation