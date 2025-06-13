import React from 'react'
import './Hero.css'
import profile_img from '../../assets/about_boyeon.gif'

const Hero = () => {

  return (
    <>
      <div id='home' className='hero'>
          <img src={profile_img} alt="" />
          <h1><span>Hi I'm Boyeon, </span>UX Specialist</h1>
          <p>5 years of realworld experience.<br/> My programming and design skills allow me to understand high complexity — I built this website myself using React!</p>

            {/* Animation background, Tailwind CSS*/}
          {/* <div className="gradient-bg"> 
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
            <div className="gradients-container">
              <div className="g1"></div>
              <div className="g2"></div>
              <div className="g3"></div>
              <div className="g4"></div>
              <div className="g5"></div>
              <div className="interactive"></div>
            </div>  
          </div> */}
      </div>

      {/* <script type="module" src="../../main.ts"></script> */}
    </>
  )
}

export default Hero