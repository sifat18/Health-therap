import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/services';

const Details = () => {
    const { key } = useParams()
    const [services] = useServices()
    const serviceData = services.find(data => data.key === key)
    return (
        <Container className='my-5'>
            <Row className='my-5'>
                <Col xs={12} md={6} className='my-3  order-sm-2 order-md-1 '>
                    <h1>{serviceData?.name}</h1>
                    <p>{serviceData?.general}</p>
                    <p>{serviceData?.para1}</p>
                    {serviceData?.para2 &&
                        <p>{serviceData?.para2}</p>
                    }
                    {serviceData?.para3 &&
                        <p>{serviceData?.para3}</p>
                    }
                </Col>
                <Col xs={12} md={6} className='my-5 order-sm-1 order-md-2 '>
                    <img src={serviceData?.img} alt="" className='img-fluid' />

                </Col>
            </Row>
        </Container>
    );
};

export default Details;