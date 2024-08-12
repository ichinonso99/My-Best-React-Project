import React from 'react'
import cart from './images/cart.png'
import { Link } from 'react-router-dom'

function EmptyCartError() {
  return (
    <div className='container-fluid' style={{justifyContent:'center', textAlign:'center'}}>
      <div className='row mt-3'>
        <div>
          <img 
          src={cart} 
          style={{height:'200px',width:'250px'}}
          data-aos='zoom-in'
          />
        </div>
        <div>
          <p  style={{ color: 'red' }} data-aos='zoom-in'>Your cart is empty!</p>
          <h6  style={{ color: 'black' }} data-aos='zoom-in'>Browse our categories and discover our best deals!</h6>
          <Link to={"/all"} ton className=' p-1 m-4 btn btn-success'>START SHOPPING</Link>
        </div>
      </div>
    </div>

  )
}

export default EmptyCartError;