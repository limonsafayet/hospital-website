import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from "../../assets/images/LS Hospital ltd.png"

export default function ContactUs() {
    return (
        <Container>
            <Row className="mt-5 mb-5">
                <Col xs={12} md={6}>
                    <img src={img} alt="Contact Us" className="img-fluid" />
                </Col>
                <Col xs={12} md={6} className="mt-5">
                    <h2 className="text-primary mb-4">Contact Us</h2>
                    <h5 className="mb-3">For appointment, emergency, billing & information: 1123</h5>
                    <h5 className="mb-3">Land phone: +88 02 8145682</h5>
                    <h5 className="mb-3">Mobile no: +88 01713377755</h5>
                    <h5 className="mb-3">24-hour emergency & ambulance service:  +88 01713377755</h5>
                    <h5 className="mb-3">Address: Gulshan Main Road, Dhaka, Bangladesh</h5>
                    <h5 className="mb-3">Email: info@lshospital.com</h5>
                    <h5>Website: lshospital.com</h5>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col xs={12} md={12}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29206.487259546517!2d90.39292479544221!3d23.789746981697096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1634653460766!5m2!1sen!2sbd" style={{ border: "0", width: "100%" }} height="450px" loading="lazy"></iframe>
                </Col>
            </Row>
        </Container>
    )
}
