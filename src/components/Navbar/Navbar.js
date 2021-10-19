import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import logo from "../../assets/images/logo.png"

function Header() {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="LS Hospital Ltd" /> LS Hospital Ltd.</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {user?.displayName ?
                            <Navbar.Text className="ms-3">
                                Signed in as: <span className="text-light">{user?.displayName}</span>
                            </Navbar.Text> : ""
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
