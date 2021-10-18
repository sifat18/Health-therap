import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <Carousel fade fluid >
                <Carousel.Item>
                    <Row>
                        <Col xs={12} md={8}>
                            <img
                                className="d-block w-100"
                                src={banner1}
                                alt="First slide"
                            /></Col>
                        <Col className='banner-Text' xs={12} md={4}>
                            <h2>alsfkapsfkaosfkaoskfopkpogskd</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ducimus quo! Magni quibusdam, doloremque, natus suscipit, officiis velit unde qui neque ad ipsum deleniti quae dicta sapiente veniam corporis doloribus!</p>
                        </Col>

                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col className='banner-Text' xs={12} md={4}>
                            <h2>alsfkapsfkaosfkaoskfopkpogskd</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perspiciatis harum quidem officia. Provident ad culpa omnis beatae accusamus quis non delectus recusandae? Facere delectus sunt maxime enim, nam neque?</p>
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
                        <Col xs={12} md={8}>
                            <img
                                className="d-block w-100"
                                src={banner3}
                                alt='sadas' /></Col>
                        <Col className='banner-Text' xs={12} md={4}>
                            <h2>alsfkapsfkaosfkaoskfopkpogskd</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut porro, odio iste, corrupti voluptatibus eos incidunt fugit labore, earum deleniti? Vitae odit nobis dolores provident harum eius, non sint.</p>
                        </Col>

                    </Row>


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;