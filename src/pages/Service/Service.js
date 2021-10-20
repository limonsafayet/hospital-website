import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../../assets/images/logo.png"

function Service({ location: { state } }) {

  return (
    <>
      <Row className="bg-primary">
        <Col xs={12} md={12} className="text-center text-light p-5">
          <h1><img src={logo} alt="LS Hospital Ltd" /> LS Hospital Ltd.</h1>
          <h4>Quality Health Service</h4>
        </Col>
      </Row>
      <Container>
        <Row className="mt-5 mb-5">
          <Col xs={12} md={4}>

            <img src={state.img} alt={state.name} style={{ width: "100%" }} />

          </Col>
          <Col xs={12} md={8}>
            <h2>{state.name}</h2>
            <p>{state.description}</p>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Service
