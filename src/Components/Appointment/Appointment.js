import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Appointment.css';
const Appointment = () => {
    const history = useHistory()
    const handleForm = () => {
        history.push('success')
    }
    return (
        <Container fluid className=' py-5 book'>
            <Row className=' my-5'>
                <Col className='order-sm-1 order-md-2'>
                    <img src="https://media.istockphoto.com/photos/woman-using-calendar-app-on-computer-in-office-picture-id1301200314?b=1&k=20&m=1301200314&s=170667a&w=0&h=hPWYcFtnvL4pOSUbL9Cq7bpknFwSepL-4mrXckXWNuc=" alt="" />

                </Col>
                <Col className='order-sm-2 order-md-1'>
                    <h2 className='text-center fs-1'>Book your Appointment Today!!!</h2>
                    <form className='mt-3 pt-2' onSubmit={handleForm}>
                        <input required className='inputs my-4 w-50' type="text" onBlur='{ }' placeholder='name' name="name" id="name" />
                        <input required className='inputs my-4 w-50' type="email" onBlur='{ }' placeholder='email' name="email" id="email" />
                        <div className='text-center'>
                            <input type="checkbox" className='mx-2 ' name="service" id="dental" value='dental' />Dental Care
                            <input required type="checkbox" className='mx-2 ' name="service" id="mental" value='mental' />mental Care
                        </div>
                        <button className='inputs btn-danger w-25 mt-2 mb-5'>Confirm</button>
                    </form>

                </Col>
            </Row >
        </Container >
    );
};

export default Appointment;