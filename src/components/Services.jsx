import React from 'react'
import ServiceOffer from './ServiceOffer'
import diagnosis from '../resources/computer_diagnostic.png'
import screen from '../resources/computer-screen.png'
import cctv from '../resources/camera.png'
import printer from '../resources/printer.png'
import repair from '../resources/computer-repair.png'
import os from '../resources/operating-system.png'
import virus from '../resources/malware.png'
import data from '../resources/data-recovery.png'
import software from '../resources/software-installer.png'
import password from '../resources/password-removal.png'
import networks from '../resources/computer-networks.png'
import accessories from '../resources/hard-disk-78.png'

function Services() {
  return (
    <>
      <div className='landing'>
        <div className="main-container">
          <div className='service-content'>
            <h4 className="section-header">Our Services</h4>
            <p className='service-text'>
              We provide an extensive range of services. Your highest expectations will be fulfilled by our services. We create business solutions that are adaptable, scalable, cost-effective, and optimized. Your firm only needs the high-quality supplies and equipment we carry.
              We use the newest methods, most effective tools, digital trends, and a dash of originality to make your business venture a tremendous success.
            </p>
          </div>
        </div>
      </div>
      <div className="deals">
        <div className="main-container">
          <div className='service-deals'>
            <p>Repairs & Deals</p>
          </div>
          <ServiceOffer />
          <ServiceOffer />
          <ServiceOffer />
          <ServiceOffer />
          <ServiceOffer />
          <ServiceOffer />
          <ServiceOffer />
          <ServiceOffer />
          <ServiceOffer />
          <ServiceOffer />
          <ServiceOffer />
        </div>
      </div>
    </>
  )
}

export default Services