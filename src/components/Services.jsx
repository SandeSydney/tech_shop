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
                    <p>This section entails:</p>
                    <ul>
                      <li>Checking Drivers</li>
                      <li>Monitoring the CPU</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header >
                    <img src={cctv} alt="" />
                    CCTVs & Security Systems
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>This section entails:</p>
                    <ul>
                      <li>Checking Drivers</li>
                      <li>Monitoring the CPU</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                  <Accordion.Header >
                    <img src={repair} alt="" />
                    Computer Tune Up
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>This section entails:</p>
                    <ul>
                      <li>Checking Drivers</li>
                      <li>Monitoring the CPU</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6'>
                  <Accordion.Header >
                    <img src={virus} alt="" />
                    Virus & Malware Removal
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>This section entails:</p>
                    <ul>
                      <li>Checking Drivers</li>
                      <li>Monitoring the CPU</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='8'>
                  <Accordion.Header >
                    <img src={software} alt="" />
                    Software Installation
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>This section entails:</p>
                    <ul>
                      <li>Checking Drivers</li>
                      <li>Monitoring the CPU</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='10'>
                  <Accordion.Header >
                    <img src={networks} alt="" />
                    Networking Equipments & Cabling
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>This section entails:</p>
                    <ul>
                      <li>Checking Drivers</li>
                      <li>Monitoring the CPU</li>
                    </ul>
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
                    <p>This section entails:</p>
                    <ul>
                      <li>Checking Drivers</li>
                      <li>Monitoring the CPU</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='3'>
                  <Accordion.Header >
                    Printing Services
                    <img src={printer} alt="" />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>This section entails:</p>
                    <ul>
                      <li>Checking Drivers</li>
                      <li>Monitoring the CPU</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='5'>
                  <Accordion.Header >
                    Operating System Install
                    <img src={os} alt="" />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>This section entails:</p>
                    <ul>
                      <li>Checking Drivers</li>
                      <li>Monitoring the CPU</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='7'>
                  <Accordion.Header >
                    Data Transfer & Data Recovery
                    <img src={data} alt="" />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>This section entails:</p>
                    <ul>
                      <li>Checking Drivers</li>
                      <li>Monitoring the CPU</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='9'>
                  <Accordion.Header >
                    Password Removal and Retrieval
                    <img src={password} alt="" />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>This section entails:</p>
                    <ul>
                      <li>Checking Drivers</li>
                      <li>Monitoring the CPU</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='11'>
                  <Accordion.Header >
                    Computer Accessories
                    <img src={accessories} alt="" />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>This section entails:</p>
                    <ul>
                      <li>Checking Drivers</li>
                      <li>Monitoring the CPU</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container black">
        <Footer theme={"dark"}/>
      </div>
    </>
  )
}

export default Services