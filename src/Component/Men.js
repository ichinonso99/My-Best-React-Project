// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { data } from '../Component/Data';
// import { Link } from "react-router-dom";
// // import ScrollingText from '../inc/ScrollingText';
// import StarRating from '../Component/StarRating';
// import { toast } from 'react-toastify';

// function Men() {
//   const countobjs = useSelector((store) => store.cartReducer.products);
//   const [countobj, setCountobj] = useState(data);

//   const men = data.filter(products => products.category === "men's clothing");
//   const dispatch = useDispatch();

//   // Create a function to addCart
//   function addCart(productId) {
//     const product = data.find((item) => item.id === productId);
//     if (product) {
//       dispatch({ type: "ADD", payload: { ...product, quantity: 1} });
//       toast.success("Item successfully added to cart")
//     }
//   };

//   // use the find method to find if the user already added an item to the card
//   const isInCart = (productId) => {
//     return countobjs.find((item) => item.id === productId)
//   }

//   return (
//     <div>
//         <h2 className='mt-3'>Men Products</h2>
//       <div className='container mt-3' >
//         {/* <ScrollingText /> */}
//         <div className='row'>
//           {
//             men.map(product => (
//               <div className='FilterProducts col-md-4 shadow p-3 mb-6 bg-body rounded mt-3 m-2' style={{ width: "16rem" }} data-aos='zoom-in'>
//                 <div key={product.id}>
//                   <Link to={`${product.id}`}>
//                     <div>
//                       <img src={product.image} alt={product.title}
//                         style={{ width: "14rem", height: '13rem' }} className='pt-2'
//                       />
//                     </div>
//                   </Link>
//                   <h6 className='mt-3'>Price: ${product.price}  <span className="text-danger"> &nbsp;<strike>${product.price
//                     * 2}</strike></span> </h6>
//                   <h6>{product.title.substring(0, 25) + "..."} </h6>
//                   <StarRating />

//                   {isInCart(product.id) ?
//                     (<button className='btn btn-primary p-1 m-4' disabled onClick={() => addCart(product.id)} style={{ cursor: "pointer" }}>ADD TO CART</button>
//                     ) :
//                     (<button className='btn btn-primary p-1 m-4' onClick={() => addCart(product.id)} style={{ cursor: "pointer" }}>ADD TO CART</button>
//                     )}
//                   <Link to={`${product.id}`} className='btn btn-secondary' >VIEW</Link>
//                 </div>
//               </div>
//             ))
//           }
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Men;