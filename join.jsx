import React from 'react'
import './join.css'

const join = () => {
  return (
    <div className="join" id="join-us">
      <div className="left-join">
        <hr />
        <div>
          <span>Ready to</span>
          <span className='stroke-text'> Level Up</span>
        </div>
        <div>
          <span className='stroke-text'>Your Body</span>
          <span > With Us?</span>
        </div>
      </div>
      <div className="right-join">
        {/* making form the Input the data */}

        <form action="" className="signup">
          <input type="email" name='user_email' placeholder='Enter Your email ' />
          {/* <input type="password" name='username' placeholder='Enter Your name ' /> */}

          <button className='btn btn-join'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default join
