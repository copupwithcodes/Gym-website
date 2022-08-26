import React from 'react'
import Header from '../Header/Header'
import Heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            <div className='the-best-ad'>
              <div></div>
              <span>the best fitness club in the town</span>
            </div>

            {/* Hero Heading */}
            <div className='hero-text'>
             <div>
              <span className='stroke-text'>Shape</span><span> Your</span></div> 
              <span> Ideal body</span>
            </div>
            <div className='span'>
              <span>In here we will help you to shape and build your ideal body,live up your life to fullest</span>
              </div>
             <div className="figure">
              <div><span>+140</span><span>Expert Coaches</span></div>
              <div><span>+978</span><span>Members Joined</span></div>
              <div><span>+50</span><span>Fitness Programs</span></div>
              
             </div>
             {/* hero buttons */}
            <div className="hero-button">
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div> 
        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>
          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpn</span>
          </div>
          {/* hero image */}
          <img src={hero_image} alt=""className='hero-image' />
          <img src={hero_image_back} alt="" className='hero-image-back' />
          {/* calories */}
          <div className="calories">
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
