import React from 'react'
import about_main from '../resources/about_main.png'
import mission from '../resources/mission.png'
import vision from '../resources/light-bulb.png'
import core_values from '../resources/core-values.png'
import Footer from './Footer'

function About() {
    return (
        <>
            <div className='main-container'>
                <div className='about-intro'>
                    <img src={about_main} alt="" />
                    <div className='about-content'>
                        <h4 className="section-header">Our Story</h4>
                        <p>With an aim to reduce the technological gap between ICT and its deployment on business infrastructure, we laid the foundation of our IT Service and Support with passion and dedication.</p>

                        <p>Here is where you find complete solutions to every ICT-related problems. Our skilled team, backed by strong academic qualifications and honed experience provides a wide range of services that blows away every obstacle on your path.</p>

                        <p>The solutions we deliver are innovative, cost-effective, re-sults-driven, and tactful. Your success is in our minds while designing the perfect blueprint for the business.</p>

                        <p>We are all set to make a difference in the ICT, service, repair and outsourcing world.</p>
                    </div>
                </div>
                <div className="about-content">
                    <h4 className="section-header">Who We Are</h4>
                    <p>We are a group of people driven by innovative trends in technology to develop end-to-end solutions with a budget-friendly approach. Our goal is to be the most promising ICT outsourcing company in Kenya.</p>

                    <p>The company is nurtured by a group of passionate individuals all of who are tech-savvies and crazy for excellence.</p>

                    <p>We thrive to serve brands and businesses with all that they require to progress with respect to information and communication technology. We plan and execute your venture into a huge success.</p>
                </div>
                <div className="target">
                    <div className="target-item">
                        <img style={{ width: "250px" }} src={mission} alt="" />
                        <div className='target-content'>
                            <h4 className="section-header">Our Mission</h4>
                            <p>Leveraging the potential of ICT to empower businesses and individuals. We provide an end-to-end implementation of ICT services enriched with innovative, practical solutions, and actionable strategies.</p>
                        </div>
                    </div>
                    <div className="target-item">
                        <img src={vision} alt="" />
                        <div className='target-content'>
                            <h4 className="section-header">Our Vision</h4>
                            <p>We envision to be the leading ICT outsourcing company in Kenya.</p>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <img src={core_values} alt="" />
                    <div className='target-content'>
                        <h4 className="section-header">Core Values</h4>
                        <ul>
                            <li>Customer Satisfaction</li>
                            <li>Goal-Oriented Services</li>
                            <li>Respect to laws</li>
                            <li>Honest deals with sincere collaboration and commitment</li>
                            <li>The leadership morale</li>
                        </ul>
                    </div>
                </div>
            </div >
            <div className="black">
                <div className="main-container">
                    <Footer theme={"dark"} />
                </div>
            </div>
        </>
    )
}

export default About