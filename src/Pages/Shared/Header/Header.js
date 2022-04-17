import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Wedding Moments</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="#about">About</Nav.Link>
                        <Nav.Link as={Link} to="#contact">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;