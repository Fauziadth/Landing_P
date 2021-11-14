import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brandLogo from '../../Pics/Logo-white.png';

const notTransparentVariant = ['/portofolio','/contact']
const BasePath = "/Landing_P";
const checkIfTransparent = (pathCheck) => {
    return (notTransparentVariant.findIndex( path => (`${BasePath}${path}`) === pathCheck) === -1);
}

export default function NavBar (){
    const path = window.location.pathname;
    const [isTransparent, setTransparent] = useState(checkIfTransparent(path));
    const [isSticky, setSticky] = useState(false);
    window.onscroll = () => {
        if (window.scrollY > 50) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    const changeLink = (path) => {
        setTransparent(checkIfTransparent(path))
    }
    return (
        <Navbar bg={!isTransparent || isSticky ? 'blue' : 'transparent' } variant='dark' expand="lg" fixed={"top"}>
            <Container>
                <Navbar.Brand href={`${BasePath}/`}><img src={brandLogo} alt='home' style={{maxHeight : '40px'}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-end">
                        <Link className="nav-link" onClick={() => changeLink(`${BasePath}/`)} to={`/`}>Home</Link>
                        <Link className="nav-link" onClick={() => changeLink(`${BasePath}/portofolio`)} to={`/portofolio`}>Porto</Link>
                        <Link className="nav-link" onClick={() => changeLink(`${BasePath}/contact`)} to={`/contact`}>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}