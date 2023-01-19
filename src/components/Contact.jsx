import React from 'react'
import contact_us from '../resources/contact-us.png'
import Navigation from './Navigation'

function Contact() {
    return (
        <>
            <Navigation />
            <div className='main-container'>
                <div className="contact-landing">
                    <div className="contact-form">
                        <div className="info">
                            <p style={{ fontWeight: 700, fontSize: '24px' }}>Get in touch</p>
                            <p style={{ fontWeight: 400, fontSize: '16px' }}>Our friendly team would love to hear from you!</p>
                        </div>
                        <div className='form-row'>
                            <div style={{ flex: "1" }} className="form-element">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" name='firstName' />
                            </div>
                            <div style={{ flex: "1" }} className="form-element">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" name='lastName' />
                            </div>
                        </div>
                        <div className="form-element">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' />
                        </div>
                        <div className="form-element">
                            <label htmlFor="phone">Phone number</label>
                            <input type="tel" name='phone' />
                        </div>
                        <div className="form-element">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="6"></textarea>
                        </div>
                        <button style={{ background: "#002142", color: "#FFFFFF", border: "1px solid", borderRadius: "8px", padding: "10px 5px", margin: "20px 0px" }}>Send Message</button>
                    </div>
                    <div className="form-img">
                        <img src={contact_us} alt="" />
                    </div>
                </div>
            </div>
            <div className="blue">
                <div className="main-container">
                    <div className="contact-foot">
                        <div className="reach-details">
                            <p className="details-head">Locate Us</p>
                            <p className="details-body">Tel: 0728145548</p>
                            <p className="details-body">Email: email@gmail.com</p>
                            <p className="details-body">Mlolongo, Machakos County - Kenya</p>
                        </div>
                        <div className="reach-details">
                            <p className="details-head">Open Hours</p>
                            <p className="details-body">Monday - Friday: 8.00am - 7.00pm</p>
                            <p className="details-body">Sat & Sun: 11.00am - 5.00pm</p>
                            <p className="details-body">Public Holidays: 11.00am - 5.00pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact