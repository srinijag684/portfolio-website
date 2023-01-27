import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
//import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled]= useState(false);

  useEffect(()=>{
    const onScroll = () =>{
      if(window.scrollY > 50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  function onUpdateActiveLink(value){
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
              Home
            </Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="#">
                <img src={navIcon1} alt="icon"/>
              </a>

              <a href="#">
                <img src={navIcon2} alt="icon"/>
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;