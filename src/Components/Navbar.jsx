
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/navbar.css'


const Menu = () => {
  
  return (
    <div>
    <Navbar expand="lg" className="navbar ">
    <Container>
      <img src='./Assets/Logo.png' alt='Logo' className="logo"/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-5">
          <Nav.Link href="home" className='active'>Home</Nav.Link>
          <Nav.Link href="profile">Profile</Nav.Link>
          <Nav.Link href="courses">Courses</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
          <button type='submit' className='btn btn-light text-primary bg-light but'>Sign Up</button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
    </div>
  )
}

export default Menu

