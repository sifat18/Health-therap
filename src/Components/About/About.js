import React from 'react';
import './About.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Col, Container, Row } from 'react-bootstrap';
import useDoctors from '../../hooks/doctors';

const About = () => {
    // fetching data using hooks
    const [doctors] = useDoctors();
    // setting for slider
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2
    };
    // dividing by category data
    const medicineDoc = doctors.filter(data => data.category === 'medicine')
    const yogaTeach = doctors.filter(data => data.category === 'yoga')
    const mentalDoc = doctors.filter(data => data.category === 'mental')

    return (
        <>
            {/* about top segment segment */}
            <Container>
                <Row>
                    {/* top-text */}
                    <Col xs={12} md={7} className=' mt-5 order-sm-2 order-md-1  '>
                        <h3 className='text-start fs-2 fw-bold'>We support people to do the extraordinary everyday </h3>
                        <div className="d-flex ">
                            <hr className='d-block text-start w-75 me-1 bg-info' />
                            <div className='fs-5 mt-2'>
                                <p>There are rights to which we are entitled, simply by virtue of our humanity. Human rights exist independent of our culture, religion, race, nationality, or economic status. Only by the free exercise of those rights can we enjoy a life of dignity. Among all the rights to which we are entitled, health care may be the most intersectional and crucial. The very frailty of our human lives demands that we protect this right as a public good.</p>
                                <p className='text-center'>Therap Help aims to continuously improve health care for the public, in collaboration with other stakeholders, by evaluating health care regulations and inspiring others to excel in providing safe and effective care of the highest quality and value. Its vision is that all people always experience the safest, highest quality, best-value health care across all settings.</p>

                            </div></div>
                    </Col>
                    {/* top-image */}

                    <Col xs={12} md={5} className='mt-5 order-sm-1 order-md-2  '>
                        <img className='d-block w-100 my-5 ' src="https://media.istockphoto.com/photos/healthcare-workers-portrait-picture-id1284636209?b=1&k=20&m=1284636209&s=170667a&w=0&h=j_vm0DELoS5ZhzbqYAI60nHoO57jHlrGIyLgqBs6Wyg=" alt="" />
                    </Col>
                </Row>
            </Container>
            {/* slider for medicine doctors*/}
            <Container className='my-5 py-5'>
                <h1 className='text-center fs-1 fw-bold'>Our Medicine Spcialists</h1>
                <hr className='m-auto w-50 ' />
                <Row className='mt-5'>
                    <Slider {...settings} >
                        {/* looping from the divided data */}
                        {medicineDoc.map(doctor => (
                            <Card key={doctor.key} className='border-0 p-2' style={{ width: '' }}>
                                <Card.Img variant="top" src={doctor.img} className='picture' />
                                <Card.Body>
                                    <Card.Title className='text-center fw-bold'>{doctor.name}</Card.Title>
                                    <Card.Text>
                                        {doctor.descript}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        ))}
                    </Slider>
                </Row >
            </Container >
            {/* yoga slider */}
            <Container className='my-5 py-5'>
                <h1 className='text-center fs-1 fw-bold'>Yoga Trainers</h1>
                <hr className='m-auto w-25 ' />
                <Row className='mt-5'>
                    <Slider {...settings} >
                        {/* looping from the divided data */}
                        {yogaTeach.map(yoga => (
                            <Card key={yoga.key} className='border-0 p-2' style={{ width: '' }}>
                                <Card.Img variant="top" src={yoga.img} className='picture' />
                                <Card.Body>
                                    <Card.Title className='text-center fw-bold'>{yoga.name}</Card.Title>
                                    <Card.Text>
                                        {yoga.descript}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        ))}
                    </Slider>
                </Row >
            </Container >
            {/* psychological  slider */}
            <Container className='my-5 py-5'>
                <h1 className='text-center fs-1 fw-bold'>Psychological Mentors</h1>
                <hr className='m-auto w-50 ' />
                <Row className='mt-5'>
                    <Slider {...settings} >
                        {/* looping from the divided data */}
                        {mentalDoc.map(psychiatrist => (
                            <Card key={psychiatrist.key} className='border-0 p-2' style={{ width: '' }}>
                                <Card.Img variant="top" src={psychiatrist.img} className='picture' />
                                <Card.Body>
                                    <Card.Title className='text-center fw-bold'>{psychiatrist.name}</Card.Title>
                                    <Card.Text>
                                        {psychiatrist.descript}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        ))}
                    </Slider>
                </Row >
            </Container >
        </>
    );
};

export default About;