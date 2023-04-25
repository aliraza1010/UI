import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
// import mylogo from '../../assets/mylogo.jpeg'

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr></hr>
      <div className="Footer">
        <div className="social-link">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        {/* <div className="logo-footer">
          <img src={mylogo} alt="" />
        </div> */}
      </div>
    </div>
  )
}

export default Footer