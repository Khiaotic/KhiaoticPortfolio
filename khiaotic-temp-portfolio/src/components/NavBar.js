import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
       const onScroll  = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
       }
    })
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="LOGO" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>    
            <Nav.Link href="#skills">Skills</Nav.Link>    
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>    
            <Nav.Link href="#contact">Contact</Nav.Link>    
            <Nav.Link href="#résumé">Résumé</Nav.Link>    
          </Nav>
          <span className="navbar-text">
            <div className="social-media-icons">
                <a href="#"><img src={} alt="LinkedIn"  /></a>
                <a href="#"><img src={} alt="Youtube"  /></a>
                <a href="#"><img src={} alt="Instagram"  /></a>
                <a href="#"><img src={} alt="Github"  /></a>
            </div>
            <button className="" onClick={() => console.log('connected link')}><span>Establish A Connection</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

