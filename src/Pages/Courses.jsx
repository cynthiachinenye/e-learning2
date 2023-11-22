import React from 'react'

const Courses = () => {
  return (
    <div className='container m-5 pt-5 '>
      <div className='d-flex align-items-center justify-content-around'>
        <h1 className='w-25 fs-5 fw-bold'>HOW OUR ONLINE PUBLIC SCHOOL WORKS</h1>
        <button className='btn btn-sm  btn-outline-primary' type="button">View all courses</button>

      </div>
      <div className='container-fluid'>
      <div>
        <img src='./Assets/Image.png' alt='slide'/>

        <h5>Hands-On Phython & R In Data Science</h5>
        <div></div>
        <button>Add to Cart</button>
      </div>
      
      </div>

    </div>
  )
}

export default Courses
