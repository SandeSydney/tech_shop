import React from 'react'
import contact_img from '../resources/contact-us-2993000_1920.jpg'
import facebook from '../resources/facebook.png'
import twitter from '../resources/twitter.png'
import whatsapp from '../resources/whatsapp.png'

function Footer({ theme }) {
  return (
    <div className={theme}>
      <div className='contact-image'>
        <img src={contact_img} alt="" />
      </div>
      <div className='contact-details'>
        <p className='contacts-lead'>Contacts</p>
        <p className='contacts-text'>Call us on: <u>0728145548</u> <i>or</i> <u>0738329432</u></p>
        <a className='contacts-text' href="mailto:aoracomltd@gmail.com">aoracomltd@gmail.com</a>
        <div className='socials'>
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <a href="http://wa.me/254728145548"><img src={whatsapp} alt="" /></a>
        </div>
        <p className="contacts-text">Aoracom Systems Limited</p>
        <p className="contacts-text">&copy;Copyright {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer