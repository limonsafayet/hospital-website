import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from "../../assets/images/banner/banner-1.png"
import img2 from "../../assets/images/banner/banner-2.png"
import img3 from "../../assets/images/banner/banner-3.png"

function Banner() {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Banner
