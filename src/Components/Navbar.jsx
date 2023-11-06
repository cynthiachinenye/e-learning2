
import React from 'react'




const Navbar = () => {

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid  d-flex justify-content-between">
     <div >
     <a className="navbar-brand ms-3 me-5" href="#"><img src='../Assets/logo.png' alt="logo"/></a>
     </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText  text-center">
        <ul className="navbar-nav ms-2 mb-2 mb-lg-0  ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Courses</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        </ul>
        <button>Sign In</button>
       
      </div>
    </div>
  </nav>  
    </div>
  )
}

export default Navbar
