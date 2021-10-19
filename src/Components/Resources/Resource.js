import React from 'react';
import './resouce.css';
import Slider from "react-slick";

import { Container, Row } from 'react-bootstrap';
import trusted from './icons8-info.svg';
import site from './icons8-google-code.svg';
import recomend from './icons8-good-quality-48.png';
const Resource = () => {
    // setting unique values for mapping data
    let id = 1;
    let youTubelinks = ["https://www.youtube.com/embed/a7fq7FIB774", "https://www.youtube.com/embed/J_NmO9Sv7nE", "https://www.youtube.com/embed/NGqqDwYYjtg", "https://www.youtube.com/embed/pc1jlelzmPY"]
    // slider setting
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
    };
    return (
        <>
            <Container fluid>
                <Row className='resource pt-5'>
                    {/* resource header */}
                    <h2 className='text-center fs-2 fw-bold'><img src={trusted} alt="" height="50" width='50' /> Trusted Health Resources</h2>
                </Row>
            </Container>
            <Container fluid className='info'>
                {/* info-body */}
                <Container fluid className='info-body'>
                    <h2 className='pt-5 mb-5 '>Here are a few other resources and sites that you can use to find out about health information and possible questions you may have. </h2>
                    <Container className='ms-5'>
                        {/* info row */}
                        <Row>
                            <ul><h2 className='text-start text-info fs-2 fw-bold mb-3'>Sites <img src={site} alt="" height="30" width='30' /> </h2>
                                <li className='text-start '>
                                    <h4 className='text-primary'>Family doctor.org</h4>
                                    <p>This Web site is operated by the American Academy of Family Physicians (AAFP), a national medical organization representing more than 105,900 family physicians, family practice residents and medical students. All of the information on this site has been written and reviewed by physicians and patient education professionals at the AAFP. </p>
                                    <p>Site link-www.familydoctor.org</p>
                                </li>
                                <li className='text-start '>
                                    <h4 className='text-primary'>Healthy Children</h4>
                                    <p>TThe American Academy of Pediatrics (AAP) and its member pediatricians dedicate their efforts and resources to the health, safety and well-being of infants, children, adolescents and young adults. </p>
                                    <p>Site link-www.healthychildren.org</p>
                                </li>
                                <li className='text-start '>
                                    <h4 className='text-primary'>Center For Disease Contre</h4>
                                    <p>CDC.gov is CDC's primary online communication channel. CDC.gov provides users with credible, reliable health information. </p>
                                    <p>Site link-www.cdc.gov</p>
                                </li>
                                <li className='text-start '>
                                    <h4 className='text-primary'>UpToDate</h4>
                                    <p>UpToDate offers a website where patients can view our patient-level information for free or subscribe to access physician-level content. </p>
                                    <p>Site link-www.uptodate.com/patients/index.html</p>
                                </li>
                            </ul>

                        </Row>

                    </Container>
                </Container>
                {/* slider row recomended */}
                <Container className='my-5'>
                    <h2 className='fs-1 text-center fw-bold '><img src={recomend} alt="" height="40" width='40' /> <span className='text-danger'> Recomended </span>Playlist</h2>
                    <hr className='w-25 mx-auto mb-5' />
                    <Row className='mb-5'>
                        <Slider {...settings} >
                            {youTubelinks.map(data => (
                                <iframe key={id++} className='px-2' width="560" height="315" src={data} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            ))}</Slider>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Resource;