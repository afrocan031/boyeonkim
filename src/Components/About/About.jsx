import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'


function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>        
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>At the heart of my work is people.
I strive to understand individuals deeply and design experiences that bring them joy and satisfaction.</p>
                    <p>With a sharp sense for changing human behavior and trends, I combine the mindsets of a UX designer, entrepreneur, and retail service provider. I listen actively, extract meaningful insights, and turn them into inspiring design ideas. I'm a passionate explorer of people, patterns, and possibilities.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>User Research</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>Wireframe</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>Data analyzing</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Web language</p><hr style={{width:"50%"}} /></div>
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>5+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>A'</h1>
                <p>5YEARS FEEDBACK</p>
            </div>

        </div>
    </div>
  )
}

export default About