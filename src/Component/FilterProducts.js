// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { data } from './Data';
// import { Link } from "react-router-dom";
// import ScrollingText from '../inc/ScrollingText';
// import StarRating from './StarRating';
// import Header from '../inc/Header';

// function FilterProducts() {
//     const countobjs = useSelector((store) => store.cartReducer.products);
//     const [countobj, setCountobj] = useState(data);
 
//     const [selectedCategory, setSelectedCategory] = useState('All'); // Initial state for category filter
//     const filteredProducts = selectedCategory === 'All' ? data : data.filter(product => product.category === selectedCategory);
//     const dispatch = useDispatch();
    
//     // create function for search
//     const [search, setSearch] = useState('')
//     const [filtered, setFiltered] = useState([])

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
//         return countobjs.find((item) => item.id === productId)
//     }

//     // create function for search
//     const handleSearch = (e) => {
//         setSearch(e.target.value)
//     }

//     useEffect(() => {
//         const mySearch = countobj.filter((count) => count.category.toLowerCase().includes(search.toLowerCase())
//         );
//         setFiltered(mySearch);
//     }, [search]);


//     return (
//         <div>
//             <Header inputSearch={search} handleSearchFunction={handleSearch} />
//             <div style={{ marginLeft: '20px' }}>
//                 <select style={{ color: 'black' }} className='btn btn-primary bg-body mt-3' value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
//                     <option className=' d-none' disabled value="All">Categories</option>
//                     <option value="All">All</option>
//                     <option value="electronics">Electronics</option>
//                     <option value="jewelery">jewelery</option>
//                     <option value="men's clothing">Men's Clothing</option>
//                     <option value="women's clothing">women's clothing</option>
//                     <option value="music">Music</option>
//                 </select>
//             </div>
//             <div className='container' >
//                 <ScrollingText />
//                 <div className='row'>
//                     {
//                         filtered.length === 0 ? <h2 style={{ color: 'red', textAlign: 'center' }}>Product not found!</h2> : (

//                             filtered.map(product => (
//                                 <div className='FilterProducts col-md-4 shadow p-3 mb-6 bg-body rounded mt-3 m-2' style={{ width: "16rem" }} data-aos='zoom-in'>
//                                     <div key={product.id}>
//                                         <Link to={`${product.id}`}>
//                                             <div>
//                                                 <img src={product.image} alt={product.title}
//                                                     style={{ width: "14rem", height: '13rem' }} className='pt-2'
//                                                 />
//                                             </div>
//                                         </Link>
//                                         <h5 className='mt-3'>Price: ${product.price}  <span className="text-danger"> &nbsp;<strike>${product.price
//                                             * 2}</strike></span> </h5>
//                                         <h5>{product.title} </h5>
//                                         <StarRating />

//                                         {isInCart(product.id) ?
//                                             (<button className='btn btn-primary p-1 m-4' disabled onClick={() => addCart(product.id)} style={{ cursor: "pointer" }}>ADD TO CART</button>
//                                             ) :
//                                             (<button className='btn btn-primary p-1 m-4' onClick={() => addCart(product.id)} style={{ cursor: "pointer" }}>ADD TO CART</button>
//                                             )}
//                                         <Link to={`${product.id}`} className='btn btn-secondary' >VIEW</Link>
//                                     </div>
//                                 </div>
//                             ))
//                         )
//                     }
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default FilterProducts;