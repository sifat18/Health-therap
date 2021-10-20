import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Appointment.css';
import reg from './registered.png';
import reg2 from './icons8-test-50.png';

const Appointment = () => {

    const history = useHistory()
    // click event after form fillup
    const handleForm = () => {
        history.push('success')
    }
    return (
        <Container fluid className=' py-5 book'>
            <Row className=' my-5'>
                <Col xs={12} md={6} className='d-md-block order-sm-1 order-md-2'>
                    <img className='img-fluid' src="https://media.istockphoto.com/photos/woman-using-calendar-app-on-computer-in-office-picture-id1301200314?b=1&k=20&m=1301200314&s=170667a&w=0&h=hPWYcFtnvL4pOSUbL9Cq7bpknFwSepL-4mrXckXWNuc=" alt="" />

                </Col>
                <Col xs={12} md={6} className='order-sm-2 order-md-1 mt-4'>
                    {/* appointment text */}
                    <h2 className='text-center text-white fs-1 fw-bold'><img src={reg} alt="" height='50' width='50' /> Book your Appointment Today!!!</h2>
                    <hr className='mx-auto w-75 text-white ' />
                    {/* appointment form */}

                    <form className='mt-3 pt-2' onSubmit={handleForm}>
                        <input required className='inputs my-4 w-50' type="text" onBlur='{ }' placeholder='name' name="name" id="name" />
                        <input required className='inputs my-4 w-50' type="email" onBlur='{ }' placeholder='email' name="email" id="email" />
                        <div className='text-center'>
                            <input type="checkbox" className='mx-2 text-white' name="service" id="dental" value='dental' />Dental Care
                            <input required type="checkbox" className='mx-2 text-white' name="service" id="mental" value='mental' />Psychological Care
                        </div>
                        <button className='inputs btn-danger w-25 mt-2 fs-4 fw-normal mt-3 mb-5'>Confirm <img src={reg2} alt="" height='30' width='30' /></button>
                    </form>

                </Col>
            </Row >
        </Container >
    );
};

export default Appointment;