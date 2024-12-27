import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'am Alex</span>frontend developer based on the..</h1>
      <p>I am a frontend developer from California. USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
      <div className = 'hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero