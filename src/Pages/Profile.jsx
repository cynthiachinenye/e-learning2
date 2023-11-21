import React from 'react'
import { PiMonitorPlayBold } from "react-icons/pi";
import { FaAddressBook, FaBookOpen} from "react-icons/fa";
import { TbSocial } from "react-icons/tb";
import '../Styles/profile.css'




const Profile = () => {
    return (
        <div className='container d-flex mt-5'>
            <div className='img-fluid'>
                <img src="./Assets/Group 114.png" alt="right" className='w-75' />
            </div>
            <div>
                <div>
                    <h3>HOW OUR ONLINE PUBLIC SCHOOL WORKS</h3>
                </div>
                <div className='container row'>
                    <div className='w-50'>
                        <div className='icon'>
                            <PiMonitorPlayBold />
                        </div>
                        <h6>VIRTUAL LEARNING</h6>
                        <p>The only costs are for standard school supplies and voluntary field trips.</p>


                    </div>


                    <div  className='w-50'>
                    <div className='icon'>
                        <FaAddressBook/>
                    </div>
                    <h6>Meaningful Education</h6>
                    <p>Many of our Connections Academy schools have additional accreditations.</p>


                </div>

                <div  className='w-50'>
                <div className='icon'>
                    <FaBookOpen />
                </div>
                <h6>ONLINE CURRICULUM</h6>
                <p>Our curriculum prepares students to go further in life by giving them support.</p>


            </div>

            <div  className='w-50'>
            <div className='icon '>
                <TbSocial />
            </div>
            <h6>SOCIAL INTERACTION</h6>
            <p>Students at Connections Academy collaborate on projects together.</p>


        </div>
                </div>
            </div>


        </div>

    )
}

export default Profile
