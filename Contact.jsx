import React from 'react'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import tick from "../../assets/tick.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import './contact.css'

const Contact = () => {
  return (
    <>
     <div className="contact" id='contact'>
   
    <div className="right-c">
        <span>Contact us</span>
        <div><span className='stroke-text'>Stay</span>
        <span style={{color:"red"}}> intouch with us?</span></div><br></br>
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

            <fieldset style={{height:"25rem", width:"36rem", padding:"1rem"}} > <form>
        <label for="fname" style={{color:"red", fontSize:"1rem" }}>Enter name: </label><br></br>
  <input type="text"  style={{height:"2rem", width:"30rem"}}/><br></br>
  <label for="lname" style={{color:"red", fontSize:"1rem"}}>enter Email:</label><br></br>
  <input type="email" style={{height:"2rem", width:"30rem"}} /><br></br>
  <label for="comment" style={{color:"red", fontSize:"1rem"}}>enter your message</label>
  <input type="text" style={{height:"4rem", width:"30rem", gap:"3rem"}}/><br></br><br></br>
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
    </div></>
  )
}

export default Contact
