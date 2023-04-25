import React from 'react'
import About from '../About/About';
import Join from '../join/join';
// import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import hero_image_back2 from "../../assets/hero_image_back2.png";
import Footer from '../Footer/Footer';

import Reasons from '../Reasons/Reasons';
// import { motion } from 'framer-motion'



const Hero = () => {
  // const transition = { type: 'spring', duration: 3 }
  //const mobile = window.innerWidth <= 786 ? true : false;
  return (
    <>
      {/* <p>Tscjahvhakvkn</p> */}
      <div className='hero'>
        <div className='left-h'>
          <div className="blur hero-blur"></div>
          {/* The best web Information */}
          <div className="web-title">
            <div
            >
            </div>

            <span>Centralized Fitness Information</span>
          </div>
          {/* Hero Heading */}
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Find </span>
              <span>Your</span>
            </div>
            <div><span> Nearby spot</span></div>
            {/* Hero Description */}
            <div>
              <span>we are providng all the information about Gyms in your city  </span>
            </div>
          </div>

          {/* figure */}
          <div className="figures">
            <div>
              <span>50 </span>
              <span>Expert Coaches</span>
            </div>
            <div>
              <span>1000+</span>
              <span>Member Joined</span>
            </div>
            <div>
              <span>50+</span>
              <span>Fitness Program</span>
            </div>
          </div>
          {/* hero button */}
          <div className="hero-button">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>

        </div>

        {/* Right Div OF the page */}

        <div className='right-h'>

          <button className='btn'>Join Now</button>

          {/* forthe heart rate div on right side */}
          <div

            className="heart-rate">

            <img src={Heart} alt="" />
            <span>Heart</span>
            <span>115 bpm</span>

          </div>
          {/* Hero Images */}
          <img

            src={hero_image} alt="" className="hero-image" />
          <img

            src={hero_image_back} alt="" className="hero-image-back" />
          <img

            src={hero_image_back2} alt="" className="hero-image-back2" />

          {/* Calories */}
          <div

            className='calories'>
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>250 kcal </span>
            </div>
          </div>
        </div>

      </div>
      <div className='line'><hr /></div>

      <Reasons />

      <About />
      <Join />

      <Footer />
    </>
  )
}

export default Hero
