import React from 'react'
import contact_img from '../resources/contact-us-2993000_1920.jpg'
import facebook from '../resources/facebook.png'
import twitter from '../resources/twitter.png'
import insta from '../resources/insta.png'

function Footer({ theme }) {
  return (
    <div className={theme}>
        <div className='contact-image'>
            <img src={contact_img} alt="" />
        </div>
        <div className='contact-details'>
            <p className='contacts-lead'>Contacts</p>
            <p className='contacts-text'>Call Us: 0728145548</p>
            <a className='contacts-text' href="mailto:gregayoo@gmail.com">gregayoo@gmail.com</a>
            <div className='socials'>
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={insta} alt="" />
            </div>
            <p className="contacts-text">TechShopInc</p>
            <p className="contacts-text">&copy;Copyright {new Date().getFullYear()}</p>
        </div>
    </div>
  )
}

export default Footer