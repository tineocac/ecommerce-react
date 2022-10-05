import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../assets/css/Navigations.css'
import Login from './Login';

const Navigation = () => {

    const logout = () => {
        alert('testing')
        localStorage.setItem('token', '')
        setIsLogin(false)
    }

    const [isLogin, setIsLogin] = useState(false)

    return (
        <Navbar bg="primary" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand to='/' as={Link}>eCommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to='/' as={Link}>Home</Nav.Link>
                        <Nav.Link to='/purschases' as={Link}>Purschases</Nav.Link>

                        <Nav.Link onClick={logout} to={'/'} as={Link}>Logout</Nav.Link>
                        <Nav.Link >{<Login login={setIsLogin} />}</Nav.Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;