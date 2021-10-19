import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner '>
            <Carousel fade fluid >
                <Carousel.Item>
                    <Row>
                        {/* first slide */}
                        <Col xs={12} md={8}>
                            <img
                                className="d-block w-100"
                                src={banner1}
                                alt="First slide"
                            /></Col>
                        <Col className='banner-Text' xs={12} md={4}>
                            <h2 className='fw-bold'>
                                Therap health doctors listen
                            </h2>
                            <p>At Therap-health, we have built a healthcare system where you come first.
                                Because nothing is more important than your and your family’s health.</p>
                        </Col>

                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {/* second slide */}

                        <Col className='banner-Text' xs={12} md={4}>
                            <h2 className='fw-bold'>
                                Primary care built around you
                            </h2>
                            <p>At Therap-health you will be treated by caring, internationally trained doctors. They take the time to listen to you and understand your healthcare needs.</p>
                        </Col>

                        <Col xs={12} md={8}>
                            <img
                                className="d-block w-100"
                                src={banner2}
                                alt="Second slide"
                            />
                        </Col>

                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {/* third slide */}

                        <Col xs={12} md={8}>
                            <img
                                className="d-block w-100"
                                src={banner3}
                                alt='sadas' /></Col>
                        <Col className='banner-Text' xs={12} md={4}>
                            <h2 className='fw-bold'>
                                Healthcare anytime, anywhere
                            </h2>
                            <p>You can get the care you need 24/7 – be it online or in clinic. And you can manage your health via our app: book appointments, access your test results, and more.</p>
                        </Col>

                    </Row>


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;