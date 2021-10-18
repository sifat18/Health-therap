import React from 'react';
import Banner from '../Banner/Banner';
import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap';
import cardImg1 from './hospital_design.jpg';
import cardImg2 from './doctor.png';
import cardImg3 from './log.png';
import './Home.css';
const Home = () => {
    let cardMsg1 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores accusantium, quibusdam quod quo ipsum amet sit necessitatibus harum aspernatur molestias facilis consequuntur ex nesciunt, fugiat doloremque dolorem eum blanditiis! Labore.";
    const homeCard = [{ "img": cardImg1, "msg": cardMsg1 }, { "img": cardImg2, "msg": cardMsg1 }, { "img": cardImg3, "msg": cardMsg1 }]
    return (
        <>
            <Banner></Banner>
            {/* schedule */}
            <Container className='box mb-5 pb-5'>
                <div>
                    <h2 className='fs-2 fw-bold mt-3'>Schedule Overview</h2>
                    <hr className='w-50 mx-auto mb-2 mt-0' />
                    <Row>
                        <Col xs={6}>
                            <h3 className='fs-4 fw-bold'>Yoga Classes</h3>
                            <hr className='w-50 mx-auto mt-0 mb-2' />
                            <div className='text-center'>
                                <p>Morning Classes ----- 7 am to 8:30 am </p>
                                <p>Afternoon Classes ----- 3 pm to 4:30 pm</p>
                                <p> Evening Classes ----- 7 pm to 8:30 pm</p>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <h3 className='fs-4 fw-bold'>Office Hours</h3>
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
            {/* card data */}
            <Container className='my-5 pt-5'>
                <h2 className='text-center fs-1 fw-normal'>Facilities</h2>
                <hr className='m-auto w-50 mb-4' />
                <Row xs={1} md={3} className="g-4">
                    {homeCard.map(data => (
                        <Col >
                            <Card className="text-center border-0">
                                <Card.Body>
                                    <Card.Img variant="top" className='d-block mt-2 mb-4 mx-auto w-50' src={data.img} />
                                    <Card.Text>{data.msg}</Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Container>
            {/* FaQ */}
            <Container className='my-5 pt-5'>
                <h2 className='text-center fs-1 fw-normal'>General Queries</h2>
                <hr className='m-auto w-25 mb-4' />
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