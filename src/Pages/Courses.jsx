import React from 'react'
import { FaCartPlus } from "react-icons/fa6"
import { MdAccessTimeFilled } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import '../Styles/course.css';

const Courses = () => {
  return (
    <div className='container m-3 pt-5 '>
      <div className='d-flex align-items-center justify-content-around'>
        <h1 className='w-25 fs-5 fw-large'>HOW OUR ONLINE PUBLIC SCHOOL WORKS</h1>
        <button className='btn btn-sm  btn-outline-primary' type="button">View all courses</button>

      </div>
      <div className='container-fluid-sm d-flex justify-content-around mt-5'>

        <div className='card' style={{ width: "14rem" }}>
          <img src='./Assets/Image.png' alt='slide' className='card-img-top' />
          <div className='card-body'>
            <h5 className='card-title'>Hands-On Phython & R In Data Science</h5>
             <span className='card-text'><MdAccessTimeFilled className='fa'/> 1,45,690</span>
              <span className='card-text'><IoIosPeople className='fa'/> 4 months</span>
              <br />
            <button className='button btn btn-outline-primary btn-md mt-3'>
              <FaCartPlus/>Add to Cart</button>

          </div>

        </div>


        <div className='card' style={{ width: "14rem" }}>
        <img src='./Assets/Image.png' alt='slide' className='card-img-top' />
        <div className='card-body'>
          <h5 className='card-title'>Hands-On Phython & R In Data Science</h5>
           <span className='card-text'><MdAccessTimeFilled className='fa' /> 1,45,690</span>
            <span className='card-text'><IoIosPeople className='fa' /> 4 months</span>
            <br />
          <button className='button2 btn btn-primary btn-md mt-3'>
            <FaCartPlus/>Add to Cart</button>

        </div>

      </div>

      <div className='card' style={{ width: "14rem" }}>
      <img src='./Assets/Image.png' alt='slide' className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>Hands-On Phython & R In Data Science</h5>
         <span className='card-text'><MdAccessTimeFilled className='fa'/> 1,45,690</span>
          <span className='card-text'><IoIosPeople className='fa' /> 4 months</span>
          <br />
        <button className='button btn btn-outline-primary btn-md mt-3'>
          <FaCartPlus/>Add to Cart</button>

      </div>

    </div>

      </div>

    </div>
  )
}

export default Courses
