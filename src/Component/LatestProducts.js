import React from 'react';
import { data1 } from './TrendingData';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import StarRating from './StarRating';
// import ScrollingText from '../inc/ScrollingText';


function LatestProducts() {
  const countobj = useSelector((store) => store.cartReducer.products);

  const dispatch = useDispatch();

  return (
    <div className='mt-3'>
        <h2 className='mt-5'>Latest Products</h2>
    <div className='container' >
      {/* <ScrollingText/> */}
      <div className='row justify-content-center'>
        {data1.map((product) => {
          console.log(data1)
          return (
            <div className='TrendingProducts col-md-4 shadow p-3 mb-6 bg-body rounded mt-3 m-2' style={{ width: "16rem" }} data-aos='zoom-in'>
              <div key={product.id}>
                <div to={`${product.id}`}>
                  <div className=''>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: "14rem", height: '13rem' }} className='pt-2 '

                    />
                  </div>
                </div>
                <h5 className='mt-4'>{product.name}</h5>
                <h5> ${product.price} <span className="text-danger"> &nbsp;<strike> ${product.price
                  * 4}</strike></span> </h5>
                <StarRating/>
              </div>
             </div>
          );
        })}
      </div>
    </div>
                </div>
  );

}
export default LatestProducts;


