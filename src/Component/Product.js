// import React, { useState } from 'react';
// import { data } from './Data';
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import ScrollingText from '../inc/ScrollingText';


// function Product() {
//   const countobj = useSelector((store) => store.cartReducer.products);
  
//   const dispatch = useDispatch();
  
//   // Create a function to addCart
//   function addCart(productId) {
//     const product = data.find((item) => item.id === productId);
//     if (product) {
//       dispatch({ type: "ADD", payload: product });
//       // alert('You just added' )
//     }
//   };
  
//   // use the find method to find if the user already added an item to the card
//   const isInCart = (productId) => {
//     return countobj.find((item) => item.id === productId)
//   }


//   return (
//     <div className='container' >
//       <h2 className='mt-5' style={{ textAlign: 'center' }}>Products</h2>
//       <ScrollingText/>
//       <div className='row'>
//         {data.map((product) => {
//           console.log(data)
//           return (
//             <div className='col-md-4 shadow p-3 mb-6 bg-body rounded mt-3 m-2' style={{ textAlign: 'center', width: "16rem" }} data-aos='zoom-in'>
//               <div key={product.id}>
//                 <Link to={`${product.id}`}>
//                   <div className=''>
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       style={{ width: "14rem", height: '13rem' }} className='pt-2 '

//                     />
//                   </div>
//                 </Link>
//                 <h5 className='mt-4'>CATEGORY: {product.category}</h5>
//                 <h5>PRICE: ${product.price} </h5>
//                 {isInCart(product.id) ? 
//                 (
//                 <button className='btn btn-primary p-1 m-4' disabled onClick={() => addCart(product.id)} style={{ cursor: "pointer" }}>ADD TO CART</button>
//                 ) : 
//                 (
//                 <button className='btn btn-primary p-1 m-4' onClick={() => addCart(product.id)}  style={{ cursor: "pointer" }}>ADD TO CART</button>
//                 )}
//                 {/* <button className='btn btn-primary p-1 m-4' onClick={()=>addCart(product.id)} style={{cursor:"pointer"}}>ADD TO CART</button> */}
//                 <Link to={`${product.id}`} className='btn btn-secondary'>VIEW</Link>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );

// }
// export default Product;


