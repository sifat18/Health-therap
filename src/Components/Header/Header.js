import React from 'react';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import logo from './healthcare.png';
import './header.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';
const Header = () => {
    const { user, isLoading, logOut } = useAuth();
    if (isLoading) {

        return <div className='text-center'><Spinner animation="border" variant="danger" />
        </div>
    }
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='header'>
                {/* logo */}
                <NavLink to='/home'><Navbar.Brand className='logo' href="#home">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block me-2 align-top "
                        alt="React Bootstrap logo"
                    />Health-Therap
                </Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav variant="pills" className="ms-auto">
                        {/* links */}
                        <NavLink to='/home'> <Nav.Link href="#home">Home</Nav.Link></NavLink>
                        <NavLink to='/about'> <Nav.Link href="#about">About</Nav.Link></NavLink>
                        <NavLink to='/resource'> <Nav.Link href="#resource">Resources</Nav.Link></NavLink>
                        <NavLink to='/appointment'> <Nav.Link href="#appointment">Appointment</Nav.Link></NavLink>
                        {/* conditional rendering */}
                        {(user.displayName || user.email) &&
                            <Navbar.Text>
                                Signed in as <a href="#login">{(user.displayName || user.email)}</a>
                            </Navbar.Text>
                        }
                        {user.email && <Nav.Link onClick={logOut}>Logout</Nav.Link>}
                        {!user.email &&
                            <NavLink to='/register'> <Nav.Link href="#register">Register</Nav.Link></NavLink>}
                        {!user.email &&
                            <NavLink to='/login'> <Nav.Link href="#login">Login</Nav.Link></NavLink>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;