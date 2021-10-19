import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import Banner from '../../components/Banner/Banner';
import HomePageService from '../../components/HomePageService/HomePageService';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
function Home() {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="home">
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Container>
                <Row className="mt-5" id="services">
                    <h2 className="mt-5 text-center text-primary">Our Services</h2>
                    {
                        services.map(service => <HomePageService
                            key={service.slug}
                            service={service}
                        ></HomePageService>)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Home
