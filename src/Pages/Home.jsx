import React from 'react'
import "../Styles/home.css"

const Home = () => {
  return (
  
    <div className='container-sm  d-flex justify-content-around '>
    <div className='d-flex '  >
    <div className='left-side my-3 text-left col-md-5 text-md-start'>
    <h1 className=' fs-2 '>Discover best classes for the best learning</h1>
    <p className='pb-3'>We designed Connections Academy to give students all across the nation a tuition-free online public school that lets them learn.</p>
    <button className='btns  text-primary mb-3' type='submit'>Get Started</button>
    <p>Not sure when to start? <a  href="#"className='text-primary '>Learn more</a></p>
    
    </div>
    <div className='right-side'>
    <img src='./Assets/Image and card.png' alt='image' className=" img-fluid w-75 ms-5"/>
    
    </div>
    
    
    </div>
    
    </div>
      
  
  )
}

export default Home
