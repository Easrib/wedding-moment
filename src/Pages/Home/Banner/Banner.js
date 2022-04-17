import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../Images/Banner/banner1.jpg"
import banner2 from "../../../Images/Banner/banner2.jpg"
import banner3 from "../../../Images/Banner/banner3.jpg"
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-image"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Wedding Moments</h3>
                    <p>Recent Photoshot</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-image"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Wedding Moments</h3>
                    <p>Recent Photoshot</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-image"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Wedding Moments</h3>
                    <p>Recent Photoshot</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;