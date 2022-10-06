import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../assets/css/Navigations.css";
import { setIsLoading } from "../store/slices/isLoading.slice";
import Cart from "./Cart";
import Login from "./Login";

const Navigation = () => {
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const logout = () => {
    localStorage.setItem("token", "");
    setIsLogin(false);
    location.reload()
  };


  const token = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(token);



  return (
    <>
      <Navbar sticky="top" bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand  to="/" as={Link}>
            eCommerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse   id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={Link}>
                Home
              </Nav.Link>

              {isLogin === "" ?
                <Nav.Link onClick={handleShowLogin}><i class="fa-solid fa-user"></i> Login</Nav.Link>
                :
                <Nav >
                  <Nav.Link to="/purschases" as={Link}>
                    Purschases
                  </Nav.Link>
                  <Nav.Link onClick={handleShowCart}><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
                  <Nav.Link className="logout" onClick={logout} to={"/"} as={Link}>
                      <i class="fa-solid fa-right-from-bracket"></i> Logout 
                  </Nav.Link>
                </Nav>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login
        showLogin={showLogin}
        handleCloseLogin={handleCloseLogin}
      />
      <Cart showCart={showCart} handleCloseCart={handleCloseCart} />
    </>
  );
};

export default Navigation;
