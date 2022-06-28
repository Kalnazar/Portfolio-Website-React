import React from 'react'
import ME from '../../assets/me-about.jpg'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={ME} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA