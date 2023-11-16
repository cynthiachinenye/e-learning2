import React from 'react'
import Container from 'react-bootstrap/Container'
import "../Styles/home.css"

const Home = () => {
  return (
    <Container>
    <div className='header d-flex m-5 d-flex justify-content-around' >
    <div className='left-side'>
    <h1>Discover best classes for the best learning</h1>
    <p>We designed Connections Academy to give students all across the nation a tuition-free online public school that lets them learn.</p>
    <button className='btn text-primary' type='submit'>Get Started</button>
    <p>Not sure when to start? <a  href="#"className='text-primary '>Learn more</a></p>
    
    </div>
    <div className='right-side'>
    <img src='./Asset'
    
    </div>
    
    
    </div>
      
    </Container>
  )
}

export default Home
