import React from 'react'
import { Col } from 'react-bootstrap';


function Doctor({ doctor }) {
    const { name, specialty, degree, img } = doctor;
    return (
        <Col xs={12} md={6} lg={4}>
            <div className="card shadow-sm bg-body rounded mt-3 mb-3 p-3" style={{ height: "580px" }}>
                <img src={img} alt={name} className="img-fluid mb-3" style={{ height: "350px" }} />
                <h3 className="text-primary">{name}</h3>
                <h5>Specialty: {specialty}</h5>
                <h5>Degree: {degree}</h5>
            </div>

        </Col>
    )
}

export default Doctor
