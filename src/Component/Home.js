import React from 'react'

import { useNavigate } from 'react-router-dom';
import Carousel1 from '../inc/Carousel';
import ScrollingText from '../inc/ScrollingText';
import TrendingProducts from './TrendingProducts';
import LatestProducts from './LatestProducts';
import DateTime from '../inc/DateTime'
// import Men from "./Men";


function Home() {

  // Function to navigate
  const navigate = useNavigate()

  return (
    <div>
      <Carousel1 />
      <a className=' btn btn-primary' href='/all' style={{marginLeft:'20px', padding:'5px', marginTop:'-1px'}}>SHOP NOW</a>
      <DateTime />
      <ScrollingText />
      {/* <button className='btn btn-primary' style={{ marginLeft: '30px' }} onClick={() => navigate(`about`)}>About us</button> */}
      {/* <Men/> */}
      <TrendingProducts />
      <LatestProducts />
    </div>
  )
}

export default Home