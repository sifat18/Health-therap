import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import imgfoot from './healthcare.png'
const Footer = () => {
    return (
        <Container fluid className='mb-0 pb-5 bg-dark h-100'>
            <Row>
                {/* footer img */}
                <Col xs={6} className='d-flex mt-5   justify-content-center align-items-center'>
                    <img src={imgfoot} height='100' alt="" />
                    <h3 className='text-white'>Therap Help</h3>
                </Col>
                <Col xs={6}>
                    <Row>
                        {/* footer texts */}
                        <Col className='d-flex my-5 pt-5 text-white flex-column'>
                            <p className='fs-4'>About</p>
                            <p className='fs-4'>Resources</p>
                            <p className='fs-4'>Tips and trircks</p>
                            <p className='fs-4'>Appointment</p>
                        </Col>
                        <Col className='d-flex my-5 pt-5 text-white flex-column'>
                            <p className='fs-4'>Contact us</p>
                            <p className='fs-4'><i className="fab fa-facebook me-2"></i>Facebook</p>
                            <p className='fs-4'><i className="fab fa-instagram me-2"></i>Instagram</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;