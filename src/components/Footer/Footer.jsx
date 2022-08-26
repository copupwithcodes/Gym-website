import React from 'react'
import './Footer.css'
import  github from '../../assets/github.png';
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className="footer">
          <div className='social-links'>
              <img className = "i-loc1" src={github} alt="" />
              <img className = "i-loc2" src={instagram} alt="" />
              <img className = "i-loc3" src={linkedin} alt="" />
          </div>
          <div className="logo-f">
              <img src={Logo} alt="" />
          </div>
        </div>
        
    </div>
  )
}

export default Footer