import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import Doctor from '../../components/Doctor/Doctor';

function Doctors() {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <Container>
            <Row className="mt-5 mb-5">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </Row>
        </Container>
    )
}

export default Doctors
