import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import imgfoot from './healthcare.png'
const Footer = () => {
    return (
        <Container fluid className='mb-0 pb-5 bg-dark h-100'>
            <Row>
                <Col xs={6} className='d-flex mt-5   justify-content-center align-items-center'>
                    <img src={imgfoot} height='100' alt="" />
                    <h3 className='text-white'>Therap Help</h3>
                </Col>
                <Col xs={6}></Col>
            </Row>
        </Container>
    );
};

export default Footer;