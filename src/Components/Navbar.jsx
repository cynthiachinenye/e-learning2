import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from  'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand'


const Navbar = () => {
  return (
    <div>
    <Navbar  className='nav bg-light'>
     <Container>
     <NavbarBrand href='#home'> Navbar</NavbarBrand>
     <Nav>
     
     </Nav>
     
     </Container>
    
    </Navbar>
      
    </div>
  )
}

export default Navbar
