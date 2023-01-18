import React from 'react'
import { Accordion } from 'react-bootstrap'
import diagnosis from '../resources/computer-diagnostic.png'

function ServiceOffer() {
  return (
    <Accordion>
        <Accordion.Item eventKey='0'>
            <Accordion.Header>System Diagnosis</Accordion.Header>
            <Accordion.Body>
                <p>This section entails:</p>
                <ul>
                    <li>Checking Drivers</li>
                    <li>Monitoring the CPU</li>
                </ul>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  )
}

export default ServiceOffer