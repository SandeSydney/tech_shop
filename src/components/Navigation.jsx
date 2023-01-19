import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='navbar-main'>
      <img className='logo' src="" alt="TechShop Mlolongo" />
      <div className='nav-items'>
        <p><Link to={"/"}>Home</Link></p>
        <p><Link to={"/services"}>Our Services</Link></p>
        <p><Link to={"/about-us"}>About Us</Link></p>
        <p><Link to={"/contact-us"}>Contact Us</Link></p>
      </div>
    </div>
  )
}

export default Navigation