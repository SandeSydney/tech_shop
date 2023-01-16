import React from 'react'

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
                    <img src="" alt="Networking section" />
                    <p className='section-lead'>Networking Equipments</p>
                    <p className='section-text'>We have a wide range of networking equipment from trusted manufacturers around the globe that you can choose from.</p>
                </div>
                <div className="sections"></div>
                <div className="sections"></div>
                <div className="sections"></div>
            </div>
        </div>
    )
}

export default Homepage