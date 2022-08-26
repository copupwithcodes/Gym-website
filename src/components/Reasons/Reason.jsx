import React from 'react'
import './Reason.css'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reason = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="Left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
            <span className='stroke-text'>why</span>
            <span className=''> choose us</span>
        </div>
        <div className='details-r'>
          <div>
            <img src={tick} alt="" />
            <span>Over 140+ Expert Coaches</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Train Smarter and Faster Than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 Free Program for New Member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Reliable Partners</span>
          </div>
        </div>
        <span className='part' style={{
          color: "var(--gray)",
          fontWeight: "normal",
          
           
        }}
        >
          OUR PARTNERS 

        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reason