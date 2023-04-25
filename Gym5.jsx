import React from 'react'
import './Gyms.css'
import { GymData } from './GymData';
import rightArrow from './images/rightArrow.png'
import leftArrow from './images/leftArrow.png'
import { useState } from 'react';
import Footer from '../../Footer/Footer'

// Program Data
import { programsData } from '../../../data/programsData';
import RightArrow from '../../../assets/rightArrow.png';
// Reasons Data

import image1 from "../../../assets/image1.png"
import image2 from "../../../assets/image2.png"
import image3 from "../../../assets/image3.png"
import image4 from "../../../assets/image4.png"
import tick from "../../../assets/tick.png"
import nb from "../../../assets/nb.png"
import adidas from "../../../assets/adidas.png"
import nike from "../../../assets/nike.png"
// Plans Section
import { plansData } from '../../../data/plansData'
import whiteTick from '../../../assets/whiteTick.png';


function Gym5() {

  const [selected, setSelected] = useState(0)
  const clength = GymData.length;
  return (
    <>

      <div className='gymHeader'>
        <span> ManFit Gym</span>
      </div>

      <div className='aboutgym'>
        <div className='left-gym'>

          <span style={{ color: "white" }}> Hey! </span>
          <span className='stroke-text'>It's Your</span>
          <span style={{ color: "red" }}>Fitness Trainer</span>
          {/* imformation about us in the project */}
          <span>{GymData[selected].review}</span>
          <span>
            <span style={{ color: "var(--Red)" }}>{GymData[selected].name} </span>
            {" "}- {GymData[selected].status}
          </span>



        </div>
        <div className='right-gym'>
          <div></div>
          <div></div>
          <img src={GymData[selected].image} alt="" />
          <div className="arrows">
            <img onClick={() => {
              selected === 0 ? setSelected(clength - 1) : setSelected((prev) => prev - 1)
            }}
              src={leftArrow} alt="" />
            <img onClick={() => {
              selected === clength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
            }}
              src={rightArrow} alt="" />
          </div>
        </div>


      </div>
      <div className='line'><hr /></div>

      {/* Program Section */}

      <div className="programs" id="programs">
        {/* header of programs */}
        <div className="programs-header">
          <span className='stroke-text'>Explore our</span>
          <span style={{ color: "red" }}>Programs</span>
          <span className='stroke-text'>to shape you</span>
        </div>

        <div className="program-categories">
          {programsData.map((program) => (
            <div className="category">
              {program.img}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="rightarrow" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reason Section */}
      <>
        <div className="Reasons" id='reasons'>
          <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
          </div>
          <div className="right-r">
            <span>Some Reasons</span>
            <div><span className='stroke-text'>Why</span>
              <span style={{ color: "red" }}>Choose us?</span></div>
            <div className='details-r'>
              <div >
                <img src={tick} alt=""></img>
                <span>Our 50+ expert coaches</span></div>
              <div>
                <img src={tick} alt="" />
                <span>Train more Smaeter and faster than before</span></div>
              <div>
                <img src={tick} alt="" />
                <span>! free program for new member</span></div>
              <div><img src={tick} alt="" />
                <span>Relaible partners</span></div>
            </div>
            <span
              style={{
                color: "gray",
                fontWeight: "normal",
              }}
            >
              Our Partners
            </span>
            <div className="partners">
              <img src={nb} alt="" />
              <img src={adidas} alt="" />
              <img src={nike} alt="" />
            </div>
          </div>

        </div>
        <div className='line'><hr /></div>
      </>

      {/* Plan Section  */}

      <>
        <div className="plans-container">
          <div className="plans-header" >
            <span className='stroke-text'>Ready To Start </span>
            <span className='span'> Your Journey </span>
            <span className='stroke-text'>Now with us</span>
          </div>

          {/* plans cards */}

          <div className="plans">
            {plansData.map((plan, i) => (
              <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>${plan.price}</span>

                <div className="features">
                  {plan.features.map((features, i) => (
                    <div className="feature">
                      <img src={whiteTick} alt="" />
                      <span key={1}>{features}</span>
                    </div>

                  ))}


                </div>
                <button className="btn">Join Now</button>
              </div>
            ))}
          </div>

        </div>
        <div className='line'><hr /></div>
      </>

      {/* Contact Section */}

      <>
        <div className="contact" id='contact'>

          <div className="right-c">
            <span>Contact us</span>
            <div><span className='stroke-text'>Stay</span>
              <span style={{ color: "red" }}> intouch with us?</span></div><br></br>
            <div className='details-c'>
              <div className='email'>
                <img src={"https://freesvg.org/img/boton-mail-1-remix.png"} alt=""></img>
                <span>Email: Harrybittering123@gmail.com</span></div>
              <div className='adress'>
                <img src={"https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/77-512.png"} alt="" />
                <span><a href="https://www.google.com/maps/place/Riphah+International+University,+Faisalabad/@31.381,73.12781,15z/data=!4m5!3m4!1s0x0:0xd7359ddff501fa25!8m2!3d31.381!4d73.12781">plot220 main satyana road near Riphah international university Faisalabad</a></span></div>
              <div className='call'>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCXdy485FBldmX9-cHU5bTLWHgQE7TGvb1A&usqp=CAU"} alt="" />
                <span>03217843398</span></div>

              {/* form */}

              <fieldset style={{ height: "25rem", width: "36rem", padding: "1rem" }} > <form>
                <label for="fname" style={{ color: "red", fontSize: "1rem" }}>Enter name: </label><br></br>
                <input type="text" style={{ height: "2rem", width: "30rem" }} /><br></br>
                <label for="lname" style={{ color: "red", fontSize: "1rem" }}>enter Email:</label><br></br>
                <input type="email" style={{ height: "2rem", width: "30rem" }} /><br></br>
                <label for="comment" style={{ color: "red", fontSize: "1rem" }}>enter your message</label>
                <input type="text" style={{ height: "4rem", width: "30rem", gap: "3rem" }} /><br></br><br></br>
                <button className="btn">Submit</button>
              </form></fieldset>

            </div>


          </div>

          <div className="left-c">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
          </div>
        </div>
      </>

      <Footer />

    </>
  )
}

export default Gym5
