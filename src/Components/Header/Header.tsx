import React, { ReactElement } from 'react';
import './Header.css';
import logo from '../../assets/logo512.png'
import { Container, Nav, Navbar } from 'react-bootstrap';

interface HeaderProps{
    children?: ReactElement | ReactElement[];
}

function Header(props: HeaderProps) {
	return (
        <Navbar className="navbar-bg-color pt-0 pb-0" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/" className="nav-texts pe-2">
                    <img src={logo} className="d-inline-block align-middle" alt="logo" height={50} draggable="false"/>
                    <span className="align-middle h3 text-white">RainbowBOT</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className="me-0">
                    {props.children}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
	);
}

export default Header;