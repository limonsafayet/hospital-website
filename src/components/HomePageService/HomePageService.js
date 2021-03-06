import React from 'react'
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

function HomePageService({ service }) {
    const { slug, name, description, img } = service;
    return (
        <Col xs={12} md={6} lg={4}>
            <div className="card shadow-sm bg-body rounded mt-3 mb-3 p-3">
                <img src={img} alt={name} className="img-fluid mb-3" />
                <h4 className="text-primary">{name}</h4>
                <p>{description.substring(0, 80)} <b className="text-primary">. . . .</b></p>
                <Link to={{
                    pathname: `/service/${slug}`,
                    state: service
                }}>
                    <button className="btn btn-warning">Read More</button>
                </Link>
            </div>

        </Col>
    )
}

export default HomePageService
