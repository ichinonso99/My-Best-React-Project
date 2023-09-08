import React from 'react'
import { useNavigate } from 'react-router-dom'
import DateTime from '../inc/DateTime'
// import image1 from ima
import WhoWeAre from '../inc/WhoWeAre'

function About() {

  // fUNCTION TO NAVIGATE
  const navigate = useNavigate()
  return (
    <div>
      <h1 className=" mt-3" style={{ textAlign: 'center' }}>About us</h1>

      <WhoWeAre />
      <DateTime />
      <button className='btn btn-warning' style={{ marginLeft:'20px' }} onClick={() => navigate(-1)}>Back to Home</button>
    </div>
  )
}

export default About