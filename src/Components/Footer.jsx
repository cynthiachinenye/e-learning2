import React from 'react'
import '../Styles/footer.css'

const Footer = () => {
  return (
    <div className='container'>
    <div className='d-flex'>
    <div className=''>
    <img src='./Assets/Logo.png' alt='logo'/>
    <p >Our motto to fulfill customer demand by making them satisfied with growing their business.</p>
    </div>
    
    <div>
    <h5>About</h5>
   <a href='#' className='link' >About Us</a>
    <a href='#' className='link'>Features</a>
     <a href='#' className='link'>News</a>
      <a href='#' className='link'>Careers</a>
       <a href='#' className='link'>FAQ</a>
    </div>

    <div>
    <h5>Support</h5>
   <a href='#' className='link' >Account</a>
    <a href='#' className='link'>Support Center</a>
     <a href='#' className='link'>Feedback</a>
      <a href='#' className='link'>Contact Us</a>
       <a href='#' className='link'>Accesbility</a>
    </div>
    
    </div>
      
    </div>
  )
}

export default Footer
