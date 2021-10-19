import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
function Home() {
    return (
        <div id="home">
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Link to={`/service/1`}>
                <button className="btn btn-warning">Book</button>
            </Link>
        </div>
    )
}

export default Home
