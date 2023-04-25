import React from 'react'

import './program.css'
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
const program = () => {
  return (
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
              <span>Join Now</span><img src={RightArrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default program
