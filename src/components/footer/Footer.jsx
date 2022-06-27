import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTelegram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sayat</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><FaFacebookF /></a>
        <a href="https://vk.com"><FiInstagram /></a>
        <a href="https://web.telegram.org/k/"><FaTelegram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sayat Kalnazar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer