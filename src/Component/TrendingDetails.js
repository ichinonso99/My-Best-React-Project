// import React, { useState } from "react"
// // import React from 'react'
// import { useNavigate, useParams } from 'react-router-dom';
// import { data } from './TrendingData';
// import { useDispatch, useSelector } from 'react-redux';

// function TrendingDetails() {
//   const [reads, setReads] = useState(false)
//   const { productId } = useParams();
//   const dispatch = useDispatch();
//   const countobj = useSelector((store) => store.cartReducer.products);

//   // Find single product

//   const product = data.find((item) => item.id.toString() === productId);
//   console.log(product)

//     // use the find method to find if the user already added an item to the card
//     const isInCart = (productId) => {
//       return countobj.find((item) => item.id === productId)
//     }

//      // Create a function to addCart
//   function addCart(productId) {
//     const product = data.find((item) => item.id === productId);
//     if (product) {
//       dispatch({ type: "ADD", payload: product });
//       // alert('You just added' )
//     }
//   };

//   // fUNCTION TO NAVIGATE
//   const navigate = useNavigate()
//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }} className='container jc-center mt-3'>Cart Details</h1>
//       <div className='row mt-3'>
//         <div key={product.id} className='col-md-6' data-aos='zoom-in'>
//           <div className="ProductDetails">
//             <img
//               src={product.image}
//               alt={product.title}
//               style={{ width: '600px', height: '400px', marginLeft: '10PX' }}
//             />
//           </div>
//         </div>
//         <div className='Details col-md-6'>
//           <h3 className='mt-2'>CATEGORY: {product.category} </h3>
//           <h4>DESCRIPTION: {reads ? product.description : `${product.description.substring(0, 30)}`}
//             <button className='btn' onClick={() => setReads(!reads)}>{reads ? "Read less..." : "Read more..."}</button></h4>
//           <h5>PRICE: ${product.price} </h5>
//           <h5>TITLE: {product.title} </h5>
//           <p>Rating: {product.rating.rate} ({product.rating.count} reviews) </p>
//         </div>
//         <br></br>
//       </div>
//       <div className="view" style={{ marginLeft:'40%' }}>
//           <button className='go p-1'style={{ height:'30px', borderColor:'blue', color:'black' }} onClick={() => navigate(-1)}>Go Back</button>
//       {/* Button to addCart       */}
//       {isInCart(product.id) ?
//         (
//           <button className='cart  p-1 m-4' disabled onClick={() => addCart(product.id)} style={{ cursor: "pointer",  height:'30px', borderColor:'blue', color:'black' }}>ADD TO CART</button>
//           ) :
//           (
//             <button className='cart p-1 m-4' onClick={() => addCart(product.id)} style={{ cursor: "pointer",  height:'30px', borderColor:'blue', color:'black' }}>ADD TO CART</button>
//             )}
// </div>
//     </div>

//   );
// }

// export default TrendingDetails;

