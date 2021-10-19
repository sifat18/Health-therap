import React from 'react';
import { Col, Button, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import useServices from '../../hooks/services';
import img1 from './icons8-care-64.png'
const Details = () => {
    // getting id from url
    const { key } = useParams()
    // loading data from hooks
    const [services] = useServices();
    // finding the exact data
    const serviceData = services.find(data => data.key === key)
    // data load after user info available
    const { isLoading } = useAuth();
    if (isLoading) {

        return <div className='text-center'><Spinner animation="border" variant="danger" />
        </div>
    }
    return (
        // looping specific data
        <Container className='my-5'>
            <Row className='my-5'>
                <Col xs={12} md={6} className='my-3  order-sm-2 order-md-1 '>
                    <h1>{serviceData?.name}</h1>
                    <p>{serviceData?.general}</p>
                    <p className='mb-5'>{serviceData?.para1}</p>
                    {serviceData?.para2 &&
                        <p>{serviceData?.para2}</p>
                    }
                    {serviceData?.para3 &&
                        <p className='mb-5'>{serviceData?.para3}</p>
                    }
                    <NavLink className='mx-5 px-5 mt-5 pt-5' to='/appointment'><Button className=' btn-warning'>Book your care <img src={img1} alt="" height='30' width='30' /></Button></NavLink>
                </Col>
                <Col xs={12} md={6} className='my-5 order-sm-1 order-md-2 '>
                    <img src={serviceData?.img} alt="" className='img-fluid' />

                </Col>
            </Row>
        </Container>
    );
};

export default Details;