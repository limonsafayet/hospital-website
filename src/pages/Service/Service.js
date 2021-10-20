import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../../assets/images/logo.png"
import notfound from "../../assets/images/service-not-found.png"

function Service({ location: { state } }) {

  return (
    <>
      <Row className="bg-primary mx-0">
        <Col xs={12} md={12} className="text-center text-light p-5">
          <h1><img src={logo} alt="LS Hospital Ltd" /> LS Hospital Ltd.</h1>
          <h4>Quality Health Service</h4>
        </Col>
      </Row>
      <Container>
        <Row className="mt-5 mb-5 mx-0">
          <Col xs={12} md={4} className="mb-5">
            <img src={state?.img ? state.img : notfound} alt={state?.name} className="mt-1" style={{ width: "100%" }} />
          </Col>
          <Col xs={12} md={8}>
            <h2>{state?.name}</h2>
            <p style={{ textAlign: "justify" }}>{state?.description}</p>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Service
