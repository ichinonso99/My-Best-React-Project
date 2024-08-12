import React from 'react'
import music from '../inc/images/music.png'

function Music() {
  return (
    <div  style={{ marginBottom:'200px' }}>
      <h5 className='mt-5'>Click Below To Download Music</h5>  
      <div  className='mt-5' style={{ marginLeft:'40%',fontSize:'30px' }}>
      <a href='https://www.last.fm/music/+free-music-downloads'> 
      <img src={music} alt="{../inc/images/music}" style={{ width: '200px', height: '50px' }} /></a>
      </div>
    </div>
  )
}

export default Music