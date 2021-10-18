import React from 'react';
import Banner from '../Banner/Banner';
import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import faq from './faq.png';
import tooth from './dental-care.png';
import psycImg from './mental-disorder.png';
import clock from './clock.png';
import yoga from './yoga.png';
import office from './office-hours.png';

import useServices from '../../hooks/services';
import { NavLink } from 'react-router-dom';
const Home = () => {
    const [services] = useServices();
    const dental = services.filter(data => data.category === 'dental')
    const mental = services.filter(data => data.category === 'mental')
    return (
        <>
            <Banner></Banner>
            {/* schedule */}
            <Container className='box mb-5 pb-5'>
                <div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={clock} alt="" height='50' width='50' />
                        <h2 className='text-center fs-2 fw-bold mt-3'>Schedule Overview</h2>
                    </div>
                    <hr className='w-50 mx-auto mb-2 mt-0' />
                    <Row>
                        <Col xs={6}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src={yoga} alt="" height='50' width='50' />
                                <h3 className='text-center mt-3 fs-4 fw-bold'>Yoga Classes</h3>
                            </div>
                            <hr className='w-50 mx-auto mt-0 mb-2' />
                            <div className='text-center'>
                                <p>Morning Classes ----- 7 am to 8:30 am </p>
                                <p>Afternoon Classes ----- 3 pm to 4:30 pm</p>
                                <p> Evening Classes ----- 7 pm to 8:30 pm</p>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src={office} alt="" height='50' width='50' />
                                <h3 className=' text-center mt-3 fs-4 fw-bold'>Office Hours</h3>
                            </div>
                            <hr className='w-50 mx-auto mt-0 mb-2' />
                            <div className='text-center'>
                                <p>Monday-Friday ----- 9 am to 8:30 pm</p>
                                <p>Saturday-Sunday ----- 10 am to 7:30 pm</p>
                                <p>Emergency Service ----- 24 hours open</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            {/* dental card data */}
            <Container className='my-5 pt-2'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={tooth} alt="" height='50' width='50' />
                    <h2 className='text-center fs-1 fw-normal'><span className='text-success'>Dental</span> Services</h2>
                </div>
                <hr className='m-auto w-25 mb-4' />
                <Row xs={1} md={3} className="g-4">
                    {dental?.map(data => (
                        <Col key={data.key} >
                            <Card className="text-center zoom border-0">
                                <Card.Body>
                                    <Card.Img variant="top" className='d-block mt-2 mb-4 mx-auto ' src={data.img} />
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text>{data.general.slice(0, 100)}</Card.Text>
                                    <NavLink to={`/services/${data.key}`}><Button variant="primary">See More</Button></NavLink>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={psycImg} alt="" className='my-auto mx-2  py-2' height='70' width='50' />
                    <h2 className='text-center mt-5 fs-1 fw-normal'><span className='text-danger'>Psychological</span> Services</h2>
                </div><hr className='m-auto w-25 mb-4' />
                <Row xs={1} md={3} className="g-4">
                    {mental?.map(data => (
                        <Col key={data.key} >
                            <Card className="text-center zoom border-0">
                                <Card.Body>
                                    <Card.Img variant="top" className='d-block mt-2 mb-4 mx-auto ' src={data.img} />
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text>{data.general.slice(0, 100)}</Card.Text>
                                    <NavLink to={`/services/${data.key}`}><Button variant="primary">See More</Button></NavLink>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Container>
            {/* FaQ */}
            <Container className='my-5 pt-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={faq} alt="" height='50' width='50' />
                    <h2 className='text-center fs-1 fw-normal'>General <span className='text-info'> Queries</span></h2>
                </div>
                <hr className='m-auto w-50 mb-4' />
                <Row>
                    <Col xs={12} md={6}>
                        <img className='d-block w-100' src="https://img.freepik.com/free-vector/tiny-people-sitting-standing-near-giant-faq_74855-7879.jpg?size=626&ext=jpg&ga=GA1.2.1377562154.1621728000" alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How Does treatment programme work?</Accordion.Header>
                                <Accordion.Body className='text-start'>
                                    Your treatment consists of attending therapeutic groups, individual sessions with therapists and medication your psychiatrist prescribes. Group therapy is compulsory: we see it as an indication of your commitment to your recovery.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Should I bring my chronic medication?</Accordion.Header>
                                <Accordion.Body className='text-start'>
                                    Yes. All medication (including non-prescription medication) must be declared on admission and handed to the nursing staff. It is important that your psychiatrist is fully aware of everything you are currently taking, as it may interact with your new prescribed medication. All medication is strictly administered according to your doctor’s prescription.
                                    You need to be able to identify your prescribed medication, and we urge you not to take any medication if you are not certain it is the correct prescribed medication. Please talk to your doctor regarding the effects of the medication you are taking. You should arrange for your doctor to complete your chronic medication documentation prior to discharge.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What does hospital billing cover?</Accordion.Header>
                                <Accordion.Body className='text-start'>
                                    Hospital billing only covers the hospitalisation itself. It excludes services such as:
                                    <ul>
                                        <li>Doctors</li>
                                        <li>Anaesthetist</li>
                                        <li>Laboratories</li>
                                        <li>Physiotherapists</li>
                                    </ul>
                                    These are all private enterprises that will bill you separately.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How do you ensure confidentiality?</Accordion.Header>
                                <Accordion.Body className='text-start'>
                                    Certain confidential information is shared with members of the interdisciplinary team during your stay. You are expected to respect the confidentiality of other patients: the only exception is when a fellow patient expresses the need to harm themselves. This must be reported to the relevant nursing staff.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Home;