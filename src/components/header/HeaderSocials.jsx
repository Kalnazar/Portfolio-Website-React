import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sayat-kalnazar-7648a4238/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Kalnazar" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/kalnazarr/" target="_blank"><FiInstagram /></a>
    </div>
  )
}

export default HeaderSocials