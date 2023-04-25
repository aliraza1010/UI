import React from 'react'
import './plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png';
const Plans = () => {
  return (
    <>
    <div className="plans-container">
        <div className="plans-header" >
            <span className='stroke-text'>Ready To Start </span>
            <span className='span'> Your Journey </span>
            <span className='stroke-text'>Now with us</span>
            </div>

            {/* plans cards */}

            <div className="plans">
             {plansData.map((plan, i)=>(
         <div className="plan" key={i}>
          {plan.icon}
          <span>{plan.name}</span>
          <span>${plan.price}</span>

          <div className="features">
            {plan.features.map((features, i)=>(
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
  );
};

export default Plans
