import React from 'react'
import { Col, Row } from 'react-bootstrap'

function NumberSection() {
    return (
        <div>

            <Row className="mt-5 mb-5 bg-dark text-light text-center">
                <Col xs={12} md={4} className="mx-auto p-4">

                    <h3> <i className="fas fa-trophy"></i></h3>
                    <h1> 85 </h1>
                    <h3> Consultation Rooms </h3>
                </Col>
                <Col xs={12} md={4} className="mx-auto p-4">

                    <h3> <i className="fas fa-bed"></i></h3>
                    <h1> 500 </h1>
                    <h3> In Patients Bed </h3>
                </Col>
                <Col xs={12} md={4} className="mx-auto p-4">

                    <h3> <i className="fas fa-user-md"></i></h3>
                    <h1> 3,000 </h1>
                    <h3> Number of Staffs </h3>
                </Col>
            </Row>

        </div>
    )
}

export default NumberSection
