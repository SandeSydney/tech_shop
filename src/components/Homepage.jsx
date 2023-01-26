import React from 'react'
import network from '../resources/sever-3100049_960_720.jpg'
import repairs from '../resources/hardware-3509893_1920.jpg'
import accessories from '../resources/computer-414059_1920.jpg'
import printing from '../resources/office-5169618_1920.jpg'
import more from '../resources/forward-arrow-78.png'
import hp from '../resources/hp.png'
import dell from '../resources/dell.png'
import apple from '../resources/apple.png'
import nvidia from '../resources/nvidia.png'
import cisco from '../resources/cisco.png'
import lenovo from '../resources/lenovo.png'
import beats from '../resources/beats.png'
import samsung from '../resources/samsung.png'
import ibm from '../resources/ibm.png'
import microsoft from '../resources/microsoft.png'
import google from '../resources/google.png'
import Footer from './Footer'
import Navigation from './Navigation'
import { useNavigate } from 'react-router-dom'

function Homepage() {

    const navigate = useNavigate()
    return (
        <>
            <Navigation /> {/* Navigation, active={home}? */}
            <div className='main-container content-section'>
                <div className='intro-text'>
                    <p className='header'>We offer quality and tested  IT services and infrastructure</p>
                    <p className='text'>As we know and understand the intricacies of the services you need to achieve your business
                        and personal goals.</p>
                </div>
                <div>
                    <h4 className='section-header'>Our Expertise</h4>
                </div>
                <div className="main-intro-section">
                    <div className="intro-sections">
                        <div className="sections">
                            <img className='sect-img' src={network} alt="Networking section" />
                            <p className='section-lead'>Networking Equipments</p>
                            <p className='section-text'>We have a wide range of networking equipment from trusted manufacturers around the globe that you can choose from.</p>
                        </div>
                        <div className="sections">
                            <img className='sect-img' src={repairs} alt="Repairs section" />
                            <p className='section-lead'>Computer Repairs</p>
                            <p className='section-text'>Qualified and proved engineers are provisioned to troubleshoot and sort your computer hardware and issues.</p>
                        </div>
                    </div>
                    <div className="intro-sections reveal">
                        <div className="sections">
                            <img className='sect-img' src={accessories} alt="Accessories section" />
                            <p className='section-lead'>Computer Accessories</p>
                            <p className='section-text'>Get to choose and experience a myriad of computer accessories ranging from monitors, keyboards, mice, headphones, e.t.c </p>
                        </div>
                        <div className="sections">
                            <img className='sect-img' src={printing} alt="Printing section" />
                            <p className='section-lead'>Printing Services</p>
                            <p className='section-text'>Do you have items that you would love to print both in colour and black & white? Worry no more, we offer exemplary services and quality printouts.  </p>
                        </div>
                    </div>
                    <div className='view-other reveal'>
                        <button className='btn-view' onClick={() => { navigate("/services") }}>
                            <div className='view'>
                                <p>View Other Services</p>
                                <img src={more} alt="Arrow" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='manufacturers content-section'>
                <div className="main-container">
                    <div className="manu-text">
                        <h4 className='section-header'>Manufacturers & Customers</h4>
                        <p>Our doors are open to Individuals, Companies both private and public, and government parastatals.</p>
                        <p>Get high quality and affordable goods and services with a guarantee of exquisite performance and durability., from the following world-class manufacturers.</p>
                    </div>
                    <div className='manu'>
                        <div className='manu-logos reveal'>
                            <img src={hp} alt="" />
                            <img src={dell} alt="" />
                            <img style={{ width: "238px", height: "50px" }} src={lenovo} alt="" />
                            <img src={apple} alt="" />
                            <img src={nvidia} alt="" />
                        </div>
                        <div className='manu-logos reveal'>
                            <img src={cisco} alt="" />
                            <img src={beats} alt="" />
                            <img style={{}} src={samsung} alt="" />
                            <img src={ibm} alt="" />
                        </div>
                        <div className='manu-logos reveal'>
                            <img src={microsoft} alt="" />
                            <img src={google} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-container content-section reveal">
                <Footer theme={"light"} />
            </div>
        </>
    )
}

export default Homepage