import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../inc/Header';
import StarRating from '../Component/StarRating';
import AddProducts from './addProducts';

function All() {
  // Redux state for cart
  const countobjs = useSelector((store) => store.cartReducer.products);

  // create function for search
  const [reads, setReads] = useState(false)
  const [search, setSearch] = useState('');
  // Local state for products, error, and loading
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [showAllProducts, setShowAllProducts] = useState(false); // Track whether to show all products

  // Fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/Product/`, { timeout: 5000 });
      setProducts(response.data);
    } catch (error) {
      // Error handling
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else if (error.response) {
        setError(`Server error: ${error.response.status} - ${error.response.data.message}`);
      } else if (error.request) {
        setError('No response received. Check your network connection.');
      } else {
        setError(`Sorry: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Cleanup function for axios cancellation
    const source = axios.CancelToken.source();

    // Fetch data when the component mounts
    fetchData();

    // Cleanup function to cancel the request on component unmount
    return () => {
      source.cancel('Request canceled by cleanup');
    };
  }, []);

  // Function to add item to the cart
  const dispatch = useDispatch();
  const addCart = (productId) => {
    const product = products.find((item) => item.id === productId);
    if (product) {
      dispatch({ type: 'ADD', payload: { ...product, quantity: 1 } });
      toast.success('Item successfully added to cart');
    }
  };

  // Function to check if the item is already in the cart
  const isInCart = (productId) => {
    return countobjs.find((item) => item.id === productId);
  };

  // filteredProducts section by categories
  const [selectedCategory, setSelectedCategory] = useState('All'); // Initial state for category filter
  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);
  // button to handle the filteredProducts
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

// create function for search
const handleSearch = (e) => {
  setSearch(e.target.value)
}
useEffect(() => {
  const mySearch = products.filter((count) => count.category.toLowerCase().includes(search.toLowerCase())
  );
  setProducts(mySearch);
}, [search]);

// Function to handle clicking the "Next" button
const handleNextClick = () => {
  setShowAllProducts(true);
};

// Function to handle clicking the "Previous" button
const handlePreviousClick = () => {
  setShowAllProducts(false);
  setTimeout(() =>window.scrollTo({ top: 0, behavior: 'smooth'}), 100);
};

return (
  <div>
    <Header inputSearch={search} handleSearchFunction={handleSearch} />

    {/* Render All Products */}
    <h2 className='mt-3'>All Product</h2>
    <div className='container mt-3'>
      <div className='row justify-content-center'>
        {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
        {error && (
          <div style={{ textAlign: 'center' }}>
            <p style={{ textAlign: 'center' }}>Error: {error}</p>
            <button onClick={fetchData} style={{ background: 'green' }}>Retry</button>
          </div>
        )}

        <div className='mt-3' style={{ textAlign: 'center' }}>
          <label>Select By Category:</label>
          <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory} >
            <option value='All'></option>
            <option value='electronics'>Electronics</option>
            <option value='women'>Women's Wear</option>
            <option value='men'>Men's Wear</option>
            <option value='babies'>Babies Wears</option>
            <option value='cloth'>Clothing</option>
            {/* Add more options as needed */}
          </select>
        </div>
 
        {
          filteredProducts.length === 0 ? <h2 style={{ color: 'red', textAlign: 'center' }}>Product not found!</h2> : (
            <>
              {showAllProducts ?
                filteredProducts.map((product) => (
                  <div
                    className=' col-md-4 shadow p-3 mb-6 bg-body rounded mt-3 m-2'
                    style={{ width: '16rem' }}
                    data-aos='zoom-in'
                    key={product.id}
                  >
                    <div>
                      <Link to={`${product.id}`}>
                        <div>
                          <img
                            src={product.image}
                            alt={product.title}
                            style={{ width: '14rem', height: '13rem' }}
                            className='pt-2'
                          />
                        </div>
                      </Link>
                      <h5 className='mt-3'>
                        Price: ${product.price}{' '}
                        <span className='text-danger'>&nbsp;<strike>${product.price * 2}</strike></span>{' '}
                      </h5>
                      <h6>{product.name.substring(0, 24) + '...'}</h6>

                      <StarRating />

                      {isInCart(product.id) ? (
                        <button
                          className='btn btn-primary p-1 m-4'
                          disabled
                          onClick={() => addCart(product.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          ADD TO CART
                        </button>
                      ) : (
                        <button
                          className='btn btn-primary p-1 m-4'
                          onClick={() => addCart(product.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          ADD TO CART
                        </button>
                      )}
                      <Link to={`${product.id}`} className='btn btn-secondary'>
                        VIEW
                      </Link>
                    </div>
                  </div>
                )) :
                filteredProducts.slice(0, 11).map((product) => (
                  <div
                    className='col-md-4 shadow p-3 mb-6 bg-body rounded mt-3 m-2'
                    style={{ width: '16rem' }}
                    data-aos='zoom-in'
                    key={product.id}
                  >
                    <div>
                      <Link to={`${product.id}`}>
                        <div>
                          <img
                            src={product.image}
                            alt={product.title}
                            style={{ width: '14rem', height: '13rem' }}
                            className='pt-2'
                          />
                        </div>
                      </Link>
                      <h5 className='mt-3'>
                        Price: ${product.price}{' '}
                        <span className='text-danger'>&nbsp;<strike>${product.price * 2}</strike></span>{' '}
                      </h5>
                      <h6>{product.name.substring(0, 24) + '...'}</h6>

                      <StarRating />

                      {isInCart(product.id) ? (
                        <button
                          className='btn btn-primary p-1 m-4'
                          disabled
                          onClick={() => addCart(product.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          ADD TO CART
                        </button>
                      ) : (
                        <button
                          className='btn btn-primary p-1 m-4'
                          onClick={() => addCart(product.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          ADD TO CART
                        </button>
                      )}
                      <Link to={`${product.id}`} className='btn btn-secondary'>
                        VIEW
                      </Link>
                    </div>
                  </div>
                ))}
            </>
          )
        }


        {/* Add next and previous buttons */}
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          {filteredProducts.length > 10 && !showAllProducts &&
            <button className='btn btn-primary mr-2' onClick={handleNextClick}>View more</button>
          }
          {showAllProducts &&
            <button className='btn btn-primary mr-2' onClick={handlePreviousClick}>View less</button>
          }
          <AddProducts />
        </div>
      </div>
    </div>
  </div>
);
}

export default All;








// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Header from '../inc/Header';
// import StarRating from '../Component/StarRating';
// import AddProducts from './addProducts';

// function All() {
//   // Redux state for cart
//   const countobjs = useSelector((store) => store.cartReducer.products);

//   // create function for search
//   const [search, setSearch] = useState('');
//   // Local state for products, error, and loading
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch data from the backend
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/api/`, { timeout: 5000 });
//       setProducts(response.data);
//     } catch (error) {
//       // Error handling
//       if (axios.isCancel(error)) {
//         console.log('Request canceled:', error.message);
//       } else if (error.response) {
//          setError(`Server error: ${error.response.status} - ${error.response.data.message}`);
//       } else if (error.request) {
//         setError('No response received. Check your network connection.');
//       } else {
//         setError(`Error: ${error.message}`);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Cleanup function for axios cancellation
//     const source = axios.CancelToken.source();

//     // Fetch data when the component mounts
//     fetchData();

//     // Cleanup function to cancel the request on component unmount
//     return () => {
//       source.cancel('Request canceled by cleanup');
//     };
//   }, []); // Empty dependency array ensures it runs only on mount

//   // Function to add item to the cart
//   const dispatch = useDispatch();
//   const addCart = (productId) => {
//     const product = products.find((item) => item.id === productId);
//     if (product) {
//       dispatch({ type: 'ADD', payload: { ...product, quantity: 1 } });
//       toast.success('Item successfully added to cart');
//     }
//   };

//   // Function to check if the item is already in the cart
//   const isInCart = (productId) => {
//     return countobjs.find((item) => item.id === productId);
//   };

//   // filteredProducts section
//   const [selectedCategory, setSelectedCategory] = useState('All'); // Initial state for category filter
//   const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);
//   // button to handle the filteredProducts
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   // create function for search
//   const handleSearch = (e) => {
//     setSearch(e.target.value)
//   }
//   useEffect(() => {
//     const mySearch = products.filter((count) => count.category.toLowerCase().includes(search.toLowerCase())
//     );
//     setProducts(mySearch);
//   }, [search]);

// //   // Add these state variables     // function to slice the products
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 8; // Set the number of products to display per page
//   // Replace the filteredProducts.map() block with the following
// const indexOfLastProduct = currentPage + productsPerPage;
// const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
// const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);



//   return (
//     <div>
//       <Header inputSearch={search} handleSearchFunction={handleSearch} />

//       {/* Render All Products */}
//       <h2 className='mt-3'>All Products</h2>
//       <div className='container mt-3'>
//         <div className='row'>
//           {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
//           {error && (
//             <div style={{ textAlign: 'center' }}>
//               <p style={{ textAlign: 'center' }}>Error: {error}</p>
//               <button onClick={fetchData} style={{ background: 'green' }}>Retry</button>
//             </div>
//           )}

//           <div className='mt-3' style={{ textAlign: 'center' }}>
//             <label>Select By Category:</label>
//             <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory} >
//               <option value='All'></option>
//               <option value='electronics'>Electronics</option>
//               <option value='women'>Women's Wear</option>
//               <option value='men'>Men's Wear</option>
//               <option value='babies'>Babies Wears</option>
//               <option value='cloth'>Clothing</option>
//               <option value='cars'>Cars</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>

//           {
//             filteredProducts.length === 0 ? <h2 style={{ color: 'red', textAlign: 'center' }}>Product not found!</h2> : (
//               filteredProducts.map((product) => (
//                 <div
//                   className='FilterProducts col-md-4 shadow p-3 mb-6 bg-body rounded mt-3 m-2'
//                   style={{ width: '16rem' }}
//                   data-aos='zoom-in'
//                   key={product.id}
//                 >
//                   <div>
//                     <Link to={`${product.id}`}>

//                       <div>
//                         <img
//                           src={product.image}
//                           alt={product.title}
//                           style={{ width: '14rem', height: '13rem' }}
//                           className='pt-2'
//                         />
//                       </div>
//                     </Link>
//                     <h5 className='mt-3'>
//                       Price: ${product.price}{' '}
//                       <span className='text-danger'>&nbsp;<strike>${product.price * 2}</strike></span>{' '}
//                     </h5>
//                     <h6>{product.name.substring(0, 24) + '...'}</h6>

//                     <StarRating />

//                     {isInCart(product.id) ? (
//                       <button
//                         className='btn btn-primary p-1 m-4'
//                         disabled
//                         onClick={() => addCart(product.id)}
//                         style={{ cursor: 'pointer' }}
//                       >
//                         ADD TO CART
//                       </button>
//                     ) : (
//                       <button
//                         className='btn btn-primary p-1 m-4'
//                         onClick={() => addCart(product.id)}
//                         style={{ cursor: 'pointer' }}
//                       >
//                         ADD TO CART
//                       </button>
//                     )}
//                     <Link to={`${product.id}`} className='btn btn-secondary'>
//                       VIEW
//                     </Link>
//                   </div>
//                 </div>
//               ))
//             )
//           }
//    {/* Add next and previous buttons */}
//    <div style={{ textAlign: 'center', margin: '20px 0' }}>
//             <button
//               onClick={() => {
//                 setCurrentPage((prev) => Math.max(prev - 1, 1));
//               setTimeout(() =>window.scrollTo({ top: 0, behavior: 'smooth'}), 100);
//               }}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             <span style={{ margin: '0 10px' }}>{currentPage}</span>
//             <button
//               onClick={() => {
//                 setCurrentPage((prev) =>
//                   Math.min(prev + 1, Math.ceil(filteredProducts.length / productsPerPage))
//                   );
//                   setTimeout(() =>window.scrollTo({ top: 0, behavior: 'smooth'}), 100);
//               }}
//               disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
//             >
//               Next
//             </button>
//           </div>
//           <AddProducts/>

//         </div>
//       </div >
//     </div >
//   );
// }

// export default All;