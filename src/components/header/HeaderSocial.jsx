import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'

const HeaderSocial = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/agyapal-singh-020983241/" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/AgyapalSingh" target='_blank'><FaGithub /></a>
            <a href="https://www.instagram.com/agya_aujla/" target='_blank'><FaInstagramSquare /></a>
        </div>
    )
}

export default HeaderSocial