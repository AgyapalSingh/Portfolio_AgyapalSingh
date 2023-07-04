import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import UNI from '../../assets/University/Guru_Nanak_Dev_University_Logo.png'
import './education.css'

const Education = () => {
    return (
        <section id='education'>
            <h5>What Education I Have</h5>
            <h2>My Education</h2>

            <div className="container education_container">
                <div className="education_div">
                    <h3>Bachelor of Technology</h3>
                    <h4>Computer Science and Engineering</h4>
                    <div className="education_details">
                        <img src={UNI} alt="College" />
                        <h3>GURU NANAK DEV UNIVERSITY</h3>
                        <h5 className='text-light'>2019-2023</h5>
                        <h5 className='text-light'>CGPA - 8/10</h5>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Education