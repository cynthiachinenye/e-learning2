import React from 'react'
import '../Styles/footer.css'
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container mt-5'>
      <div className='d-flex align-items-center p-3 justify-content-between'>
        <div className='w-25 p-3'>
          <img src='./Assets/Logo.png' alt='logo' />
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

        <div>
          <h5>Get our app</h5>
          <div className='icons'>
            <FaGooglePlay />
            <p><span>GET IT ON</span> Google Play</p>
          </div>

          <div className='icons'>
            <FaApple  />
            <p><span>Download on it</span> App Store</p>
          </div>
        </div>

      </div>

      <hr/>

      <p className='p'>Copyright Besnik 2021 All rights reserved.</p>

    </div>
  )
}

export default Footer
