import React from 'react'
import diagnosis from '../resources/computer-diagnostic.png'
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
import Accordion from "react-bootstrap/Accordion"
import Footer from './Footer'
import Navigation from './Navigation'

function Services() {
  return (
    <>
      <Navigation />
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
            <p>Repairs & Service Deals</p>
          </div>
          <div className="all-service-offers">
            <div className='service-offer-left'>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header >
                    <img src={diagnosis} alt="" />
                    System Diagnosis
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>We have at our disposal the best resources to help determine and isolate issues with your device.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header >
                    <img src={cctv} alt="" />
                    CCTVs & Security Systems
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>The best quality surveillance cameras and DVRs to help monitor your business and help secure your premises.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                  <Accordion.Header >
                    <img src={repair} alt="" />
                    Computer Tune Up
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Your computing device tends to be slow, unresponsive and lags in performance. We offer services to bring it back to new new conditions and speed it up.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6'>
                  <Accordion.Header >
                    <img src={virus} alt="" />
                    Virus & Malware Removal
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Virus and Malware have adverse conditions in your devices and can even steal or destroy your most important data. We have the resources to find the viruses and go a step further to eliminate them from your devices. </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='8'>
                  <Accordion.Header >
                    <img src={software} alt="" />
                    Software Installation
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>We have a myriad of licenced and open-source software that you may need for both personal and organizational use. We also supply and install them in bulk. </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='10'>
                  <Accordion.Header >
                    <img src={networks} alt="" />
                    Networking Equipments & Cabling
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Getting to be connected to your colleagues, sharing and even making deals with other stakeholders improves your business. We are skilled in installing and configuring wired and wireless environments to help you achieve this feat.</p>
                    <p>Our range of products include routers; switches; access points( wired and wireless); Wi-Fi extenders; etcetra.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className='service-offer-right'>
              <Accordion>

                <Accordion.Item eventKey='1'>
                  <Accordion.Header >
                    Laptop Screen Replacement
                    <img src={screen} alt="" />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Unresponsive, damaged and broken laptop screens are a nightmare. Get to us to help you remedy the condition and get you back to your normal operations within a short span of time.</p>
                    <p>We have specialty in handling any type and model of your PC and Laptop.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='3'>
                  <Accordion.Header >
                    Printing Services
                    <img src={printer} alt="" />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>We offer cutting-edge services and produce the best quality printouts. Do you need them fast and in bulk? Aoracom delivers. </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='5'>
                  <Accordion.Header >
                    Operating System Install
                    <img src={os} alt="" />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>From Windows, Chrome OS, Mac OS, and Linux together with its distributions, Aoracom is the best place to get them installed and configured. </p>
                    <p>We do the installations meticulously and ensure all configurations are up-to standard.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='7'>
                  <Accordion.Header >
                    Data Transfer & Data Recovery
                    <img src={data} alt="" />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>We have resources both human and technological that can assist you migrate data from and to different platforms.</p>
                    <p>If your data has been lost or have a damaged storage devices, we are skilled in getting to recover the data. Give us a call today! </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='9'>
                  <Accordion.Header >
                    Password Removal and Retrieval
                    <img src={password} alt="" />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Have you been locked out of your own device and really need access to stuff in there? Worry not because we got you covered.</p>
                    <p>We have advanced skills in getting through and recovering your passwords and also removing them, depending on what you need.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='11'>
                  <Accordion.Header >
                    Computer Accessories
                    <img src={accessories} alt="" />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>From wired and wireless mice & keyboards, wired and wireless headsets, graphic cards, memory storages, NICs, to computer monitors and CPUs, We have you and your needs covered.</p>
                    <p>The best and high quality accessories we offer at a pocket and customer-friendly price.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container black">
        <Footer theme={"dark"} />
      </div>
    </>
  )
}

export default Services