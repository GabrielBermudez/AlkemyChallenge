import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import Logo from '../images/logo.png';

const NavBar = () => {
    const styleLogo ={
        width: '30px',
        borderRadius: '50px',
        marginRight: '10px'
    };
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img src={Logo} alt="" style={styleLogo} />
                    <Navbar.Brand href="#home">Alkemy Challenge</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/budget-management/index">Administración de Presupuesto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;