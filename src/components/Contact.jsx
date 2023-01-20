import React, { useRef } from 'react'
import contact_us from '../resources/contact-us.png'
import Navigation from './Navigation'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const form = useRef()
    const last = useRef()
    const first = useRef()
    const email = useRef()
    const phone = useRef()
    const message = useRef()

    const navigate = useNavigate()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_srsmx1p', 'contact_form', form.current, 'GldVl5y-K2eCb0nkD')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

        last.current.value = ''
        first.current.value = ''
        email.current.value = ''
        phone.current.value = ''
        message.current.value = '' 
        
        navigate('/')
    }

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
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='form-row'>
                                <div style={{ flex: "1" }} className="form-element">
                                    <label htmlFor="first_name">First name</label>
                                    <input ref={first} type="text" name='first_name' />
                                </div>
                                <div style={{ flex: "1" }} className="form-element">
                                    <label htmlFor="last_name">Last name</label>
                                    <input ref={last} type="text" name='last_name' />
                                </div>
                            </div>
                            <div className="form-element">
                                <label htmlFor="user_mail">Email</label>
                                <input ref={email} type="email" name='user_mail' />
                            </div>
                            <div className="form-element">
                                <label htmlFor="user_phone">Phone number</label>
                                <input ref={phone} type="tel" name='user_phone' />
                            </div>
                            <div className="form-element">
                                <label htmlFor="message">Message</label>
                                <textarea ref={message} name="message" id="message" cols="30" rows="6"></textarea>
                            </div>
                            <button type='submit' style={{ background: "#002142", color: "#FFFFFF", border: "1px solid", borderRadius: "8px", padding: "10px 5px", margin: "20px 0px" }}>Send Message</button>
                        </form>
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