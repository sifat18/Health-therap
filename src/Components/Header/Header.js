import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './healthcare.png';
import './header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className='header'>
                <NavLink to='/home'><Navbar.Brand className='logo' href="#home">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block me-2 align-top "
                        alt="React Bootstrap logo"
                    />Heath-Therap
                </Navbar.Brand></NavLink>
                <Nav variant="pills" className="ms-auto">

                    <NavLink to='/home'> <Nav.Link href="#home">Home</Nav.Link></NavLink>
                    <NavLink to='/about'> <Nav.Link href="#about">About</Nav.Link></NavLink>
                    <NavLink to='/resource'> <Nav.Link href="#resource">Resources</Nav.Link></NavLink>
                    <NavLink to='/appointment'> <Nav.Link href="#book">Appointment</Nav.Link></NavLink>
                </Nav>
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Header;