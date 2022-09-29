import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import '../assets/css/Navigations.css'

const Navigation= () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand to='/' as={Link}>Ecommerce</Navbar.Brand>
                <Nav className='nav'>
                    <Nav.Link to='/' as={Link}>Home</Nav.Link>
                    <Nav.Link to='/login' as={Link}>Login</Nav.Link>
                    <Nav.Link to='/purschases' as={Link}>Purschases</Nav.Link>
                    <Nav.Link>{<Cart/>}</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;