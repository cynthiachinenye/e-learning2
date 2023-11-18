import React from 'react'
import Container from 'react-bootstrap/Container'
import "../Styles/home.css"

const Home = () => {
  return (
    <Container className='d-sm-block '>
    <div className='header d-flex  d-flex container-sm '  >
    <div className='left-side ms-5 my-5 w-50'>
    <h1 className='pb-3 fs-2 '>Discover best classes for the best learning</h1>
    <p className='pb-3'>We designed Connections Academy to give students all across the nation a tuition-free online public school that lets them learn.</p>
    <button className='btns  text-primary mb-3' type='submit'>Get Started</button>
    <p>Not sure when to start? <a  href="#"className='text-primary '>Learn more</a></p>
    
    </div>
    <div className='right-side'>
    <img src='./Assets/Image and card.png' alt='image' className="img my-5 img-fluid-sm "/>
    
    </div>
    
    
    </div>
      
    </Container>
  )
}

export default Home
