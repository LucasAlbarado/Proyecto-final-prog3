import React from 'react';
import {Container,Nav,Navbar,NavDropdown}from 'react-bootstrap';
import './Navbar.css';

function NavBar() {
  return (
    <Navbar expand="lg" variant="dark" style={{backgroundColor: "#ec5853",}}>
      <Container direction="horizontal" gap={6} className='contact-Nav' >
        <Navbar.Brand className='logo-Navbar'> 
                  <a to="/home"><img className='logo-img' src="./src/images/Logo-Appetito.png" alt="Logo de appetito" /></a>
                  <a to="/home" className='logo-letter'><h5><strong>Proyecto final</strong></h5></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto">
              <Nav.Link >
                  <a to="/home" className='nav-links'>Inicio</a>
              </Nav.Link>
              <Nav.Link >
                  <a to="/create" className='nav-links'>Pedido</a>
              </Nav.Link>
              <Nav.Link>
                  <a to="/menu" className='nav-links'>Menu</a>
              </Nav.Link>
              <Nav.Link >
                  <a to="/cart" className='nav-links'>Carrito</a>
              </Nav.Link>
            <NavDropdown title="Tu cuenta" id="basic-nav-dropdown">
                  <NavDropdown.Item > 
                        <a to="/login" className='nav-letter'>Iniciar sesion</a> 
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                      <a to="/register" className='nav-letter'>Registrarse</a>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                      <a to="/account" className='nav-letter'>Cambiar mis datos</a> 
                  </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;