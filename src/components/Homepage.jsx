import React from 'react'
import network from '../resources/sever-3100049_960_720.jpg'
import repairs from '../resources/hardware-3509893_1920.jpg'
import accessories from '../resources/computer-414059_1920.jpg'
import printing from '../resources/office-5169618_1920.jpg'

function Homepage() {
    return (
        <div className='main-container'>
            <div className='intro-text'>
                <p className='header'>We offer quality and tested  IT services and infrastructure</p>
                <p className='text'>As we know and understand the intricacies of the services you need to achieve your business
                    and personal goals.</p>
            </div>
            <div>
                <p className='section-header'>Our Expertise</p>
            </div>
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
            <div className="intro-sections">
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
        </div>
    )
}

export default Homepage