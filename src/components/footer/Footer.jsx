import React from 'react'
import './footer.css'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'
import { BiLogoInstagram } from 'react-icons/bi'
import { BiLogoFacebook } from 'react-icons/bi'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>AGYAPAL SINGH</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                {/* <li><a href="#services">Services</a></li> */}
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>

            <div className='footer_socials'>
                <a href="https://www.linkedin.com/in/agyapal-singh-020983241/" target='_blank'><FaLinkedinIn /></a>
                <a href="https://github.com/AgyapalSingh" target='_blank'><FaGithub /></a>
                <a href="https://www.facebook.com/agyapal.singh.58726/" target='_blank'><BiLogoFacebook /></a>
                <a href="https://www.instagram.com/agya_aujla/" target='_blank'><BiLogoInstagram /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; AGYAPAL SINGH. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer