
import React from 'react'
import '../Styles/navbar.css'




const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className=" container-fluid  d-flex justify-content-between p-3">
   
          <div >
            <a className="navbar-brand ms-3 me-5" href="#"><img src='../Assets/logo.png' alt="logo" /></a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-pressed= " true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ps-5 text-dark md-5" id="navbarText ">
            <ul className="navbar-nav ms-2 mb-2 mb-lg-0 fs-6 ">
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
            <button className='btn btn-border-radius-3 bg-light md-5 text-primary' type='button'>Sign In</button>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
