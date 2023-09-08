// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { data } from './Data';
// import { Link } from "react-router-dom";

// function Play() {
//     const countobj = useSelector((store) => store.cartReducer.products);

//     const [selectedCategory, setSelectedCategory] = useState('All'); // Initial state for category filter
//     const filteredProducts = selectedCategory === 'All' ? data : data.filter(product => product.category === selectedCategory);
//     const dispatch = useDispatch();

//     const handleCategoryChange = (category) => {
//         setSelectedCategory(category);
//     };

//     // Create a function to addCart
//     function addCart(productId) {
//         const product = data.find((item) => item.id === productId);
//         if (product) {
//             dispatch({ type: "ADD", payload: product });
//             // alert('You just added' )
//         }
//     };

//     // use the find method to find if the user already added an item to the card
//     const isInCart = (productId) => {
//         return countobj.find((item) => item.id === productId)
//     }


//     return (
//         <div>
//             <div>
//                 <select  style={{ color:'black' }} className='btn btn-primary bg-body' value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
//                     <option className=' d-none' disabled value="All">Categories</option>
//                     <option value="All">All</option>
//                     <option value="electronics">Electronics</option>
//                     <option value="men's clothing">Men's Clothing</option>
//                     <option value="jewelery">jewelery</option>
//                     <option value="women's clothing">women's clothing</option>
//                 </select>
//             </div>
//                 <div className='container' >
//                     <div className='row'>
//                 {filteredProducts.map(product => (
//                                 <div className='col-md-3 shadow p-3 mb-5 bg-body rounded mt-3 m-3' style={{ textAlign: 'center', width: "25rem" }} data-aos='zoom-in'>
//                     <div key={product.id}>
//                         <Link to={`${product.id}`}>
//                             <div>
//                                 <img src={product.image} alt={product.title}
//                                     style={{ width: "18rem", height: '18rem' }} className='pt-4 '
//                                 />
//                             </div>
//                         </Link>
//                         <h5 className='mt-3'>PRICE: ${product.price} </h5>
//                         <h5>{product.title} </h5>

//                         {isInCart(product.id) ?
//                             (<button className='btn btn-primary p-1 m-4' disabled onClick={() => addCart(product.id)} style={{ cursor: "pointer" }}>ADD TO CART</button>
//                             ) :
//                             (<button className='btn btn-primary p-1 m-4' onClick={() => addCart(product.id)} style={{ cursor: "pointer" }}>ADD TO CART</button>
//                             )}<Link to={`${product.id}`} className='btn btn-secondary'>VIEW</Link>
//                     </div>
//                 </div>
//                 ))}
//                 </div>
                
//             </div>
//         </div>
//     )
// }

// export default Play