import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaRegEnvelope, FaRegPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <>
          <div className='Footer'>
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 col-lg-4 col-12 ft-1 logo-icons">
                      <a to="/"><img className='logo-footer' alt="logo de la pagina" /></a>
                          <div className="footer-icons pt-3 ">
                          <a to="/Error404" className='m-2'><FaFacebook  className='link-nav'/></a>
                          <a to="/Error404" className='m-2'><FaInstagram  className='link-nav'/></a>
                          <a to="/Error404" className='m-2'><FaTwitter  className='link-nav'/></a>
                          </div>
                      </div>
                      <div className="col-md-4 col-lg-4 col-12 ft-2 links-footer">
                            <h3 style={{color: "#ffdfd0",}}>Sobre nosotros</h3>
                            <ul >
                                <li className="nav-item ">
                                    <a to="/Aboutus" className='link-nav m-5'>¿Quienes somos?</a>
                                </li>
                                <li className="nav-item">
                                    <a to="/Frequentquestion" className='link-nav m-3'>Preguntas frecuentes</a>
                                </li>
                                <li className="nav-item">
                                    <a to="/Contact" className='link-nav m-5' >Envianos tu opinion</a>
                                </li>
                            </ul>
                        </div>
                      <div className="col-md-4 col-lg-4 col-12 ft-3" style={{color: "#ffdfd0",}}>
                          <h3>Contacto</h3>
                          <p><FaPhoneAlt /><a href="https://wa.me/543813040031 "  style={{color: "#ffdfd0",}}>381-3040031</a></p>
                          <p><FaRegEnvelope />  RestauranteRolling1@gmail.com</p>
                          <p><FaRegPaperPlane /> General Paz 576, San Miguel de Tucuman, Argentina</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className='Last-footer'>
              <p>©copyright 2023-2030</p>
          </div>
      </>
  )
}

export default Footer