import React from 'react'

import { useNavigate } from 'react-router-dom';
import Carousel1 from '../inc/Carousel';
import ScrollingText from '../inc/ScrollingText';
// import Men from "./Men";


function Home() {

  // Function to navigate
  const navigate = useNavigate()

  return (
    <div>
   <Carousel1/>
   <ScrollingText/>
      <button className='btn btn-primary' style={{ marginLeft:'30px' }} onClick={()=> navigate(`about`)}>About us</button>
      {/* <Men/> */}
    </div>
  )
}

export default Home