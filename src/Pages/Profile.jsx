import React from 'react'
import { PiMonitorPlayBold } from "react-icons/pi";
import { FaAddressBook, FaBookOpen} from "react-icons/fa";



const Profile = () => {
    return (
        <div className='container d-flex'>
            <div className='img-fluid'>
                <img src="./Assets/Group 114.png" alt="right" className='w-50' />
            </div>
            <div>
                <div>
                    <h1>HOW OUR ONLINE PUBLIC SCHOOL WORKS</h1>
                </div>
                <div className='container'>
                    <div>
                        <div>
                            <PiMonitorPlayBold />
                        </div>
                        <h3>VIRTUAL LEARNING</h3>
                        <p>The only costs are for standard school supplies and voluntary field trips.</p>


                    </div>


                    <div>
                    <div>
                        <FaAddressBook/>
                    </div>
                    <h3>Meaningful Education</h3>
                    <p>Many of our Connections Academy schools have additional accreditations.</p>


                </div>

                <div>
                <div>
                    <FaBookOpen />
                </div>
                <h3>ONLINE CURRICULUM</h3>
                <p>Our curriculum prepares students to go further in life by giving them support.</p>


            </div>

            <div>
            <div>
                <PiMonitorPlayBold />
            </div>
            <h3>SOCIAL INTERACTION</h3>
            <p>Students at Connections Academy collaborate on projects together.</p>


        </div>
                </div>
            </div>


        </div>

    )
}

export default Profile
