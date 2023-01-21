import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo_img from '../resources/Logo.png'

function Navigation() {
  return (
    <Navbar className='navbar-main' expand="lg">
      <Navbar.Brand className='logo'>
        <Link className='logo-link' to={"/"}>
          <img style={{ maxWidth: "60px"}} src={logo_img} alt="" />
          Aoracom Systems Ltd
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
    </Navbar>

  )
}

export default Navigation