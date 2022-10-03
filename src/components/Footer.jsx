import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../assets/css/Footer.css'

const Footer = () => {

const navigate = useNavigate();

  return (
    <Row className='footer m-0 p-5 pb-0 small-5 bg-dark text-white'>

      <Col xs={12} md={6} lg={4}>

        <div className='footer-logo' onClick={() => window.scrollTo(0, 0)}>
        </div>
        <h2>About us</h2>
        <div className="text-secondary">
          <small>Work with us</small>
          <small>Corporate information</small>
          <small>Press department</small>
        </div>

      </Col>
      <Col xs={12} md={6} lg={2}>
        <h5>Earn monet with us</h5>
        <div className="text-secondary">
          <small>Sells in</small>
          <small>Affiliates programs</small>
          <small>Advertise your products</small>
        </div>

      </Col>
      <Col xs={12} md={6} lg={2}>
        <h5>Methods of payment</h5>
        <div className='text-secondary'>
          <small>Credit & debit cards</small>
          <small>Gift card</small>
          <small>Cash payment</small>
          <small>Months without fee</small>
        </div>
      </Col>
      

      <Col xs={12} md={12} lg={2}>
        <h5>Info</h5>
        <div className='text-secondary'>
          <small>Web Services</small>
          <small>Terms & Condiciones</small>
          <small>Privacy Police</small>
        </div>

      </Col>
      <Col xs={12} md={6} lg={2}>
        <h5>Countries</h5>
        <div className='text-secondary'>
          <small>México</small>
          <small>Colombia</small>
          <small>Venezuela</small>
          <small>Argentina</small>
          <small>Uruguay</small>
          <small>Brasil</small>
        </div>
      </Col>
      <div className='rights-container'>
        <p>Copyrigth - All rights reserved © 2022</p>
      </div>
    </Row >
  )
}

export default Footer
