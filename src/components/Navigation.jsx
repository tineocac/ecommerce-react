import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import '../assets/css/Navigations.css'

const Navigation = () => {

    const logout = () => {
        alert('testing')
        localStorage.setItem('token', '')
    }

    return (
        <Navbar bg="primary" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand to='/' as={Link}>eCommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to='/' as={Link}>Home</Nav.Link>
                        <Nav.Link to='/login' as={Link}>Login</Nav.Link>
                        <Nav.Link to='/purschases' as={Link}>Purschases</Nav.Link>
                        <Nav.Link>{<Cart />}</Nav.Link>
                        <Nav.Link onClick={logout} to={'/login'} as={Link}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;