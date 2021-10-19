import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from "../../assets/images/why-choose-us.svg"

function WhyChooseUs() {
    return (
        <Container>
            <Row className="mt-5 mb-5">
                <Col xs={12} md={6}>
                    <img src={img} alt="Why Choose Us" className="img-fluid" />
                </Col>
                <Col xs={12} md={6} className="mt-5">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne">
                                    <span className="text-primary"><i className="fas fa-clinic-medical"></i> <b className="ms-3">Excellent Services</b></span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    <p>Clinical excellence must be the priority for any health care service provider.
                                        LS Hospital Ltd ensures the best healthcare service comprise of professional (clinical)
                                        service excellence with outstanding personal service. </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
                                    <span className="text-primary"><i className="fas fa-user-md"> <b className="ms-3">Qualified Doctors</b></i></span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    <p>LS Hospital Ltd aims to provide the highest possible level of care by the qualified consultants from India, Singapore, USA, UK & quality hospitals in the Middle East. Even the nurses & technicians are also proficiently trained from Bangladesh, Australia, UK, India and The Philippines.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree">
                                    <span className="text-primary"><i className="fas fa-ambulance"> <b className="ms-3">Emergency Departments</b></i></span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    <p>For appointment, emergency, billing & information: 1123 <br />
                                        Land phone: +88 02 8145682 <br />
                                        Mobile no.: +88 01713377755 <br />
                                        24-hour emergency & ambulance service:  +88 01713377755 <br />
                                        Email: info@lshospital.com </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseFour">
                                    <span className="text-primary"><i className="fas fa-hospital"></i> <b className="ms-3">Great Infrastructure</b></span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingFour">
                                <div className="accordion-body">
                                    <p>LS Hospital Ltd has 3 buildings on both sides of the Gulshan Main Road, connected by an over bridge. The hospital with more than 6 lac square feet of space is situated in the central region of Dhaka city, capital of Bangladesh.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default WhyChooseUs
