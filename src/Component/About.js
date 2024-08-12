import React from 'react'
import { useNavigate } from 'react-router-dom'
import DateTime from '../inc/DateTime'
// import image1 from ima
import WhoWeAre from '../inc/WhoWeAre'
// import TellMeAll from './TellMeAll'

function About() {

  // fUNCTION TO NAVIGATE
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="container shadow mt-3" style={{ textAlign: 'center' }}>About us</h1>

      <WhoWeAre />
      <div className='container shadow'>
      <DateTime />
      </div>
      <button className='btn btn-warning' style={{ marginLeft:'20px' }} onClick={() => navigate(-1)}>Back to Home</button>
    </div>
  )
}

export default About