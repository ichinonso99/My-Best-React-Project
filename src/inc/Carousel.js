import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Carousel1() {

  // Local state for products, error, and loading
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/Carousel/', { timeout: 5000 });
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
        setError(`Error: ${error.message}`);
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

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      {/* <div className='col-md-4'> */}
      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error && (
        <div style={{ textAlign: 'center' }}>
          <p>Error: {error}</p>
          <button onClick={fetchData}>Retry</button>
        </div>
      )}
         <Carousel activeIndex={index} onSelect={handleSelect}>
         {products.map((product, idx) => (
        <Carousel.Item key={idx}>
           <img data-aos='zoom-in'
             height='600'
             className="d-block w-100"
             src={product.image}
             alt="First slide"
           />
           <Carousel.Caption>
             <h3>{product.slide}</h3>
             <p>{product.body}</p>
           </Carousel.Caption>
         </Carousel.Item>
            ))}
            </Carousel>
        </div>
  )
}

export default Carousel1;













// import React from 'react'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"
// import image2 from './images/image2.jpg'
// import image1 from './images/image1.jpg'
// import image3 from './images/image3.jpg'
// import Carousel from 'react-bootstrap/Carousel';
// import { useState } from 'react';

// function Carousel1() {

//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <div >
//       <Carousel activeIndex={index} onSelect={handleSelect}>

//         <Carousel.Item>
//           <img data-aos='zoom-in'
//             height='600'
//             className="d-block w-100"
//             src={image1}
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             height='600'
//             className="d-block w-100"
//             src={image2}
//             alt="Second slide"
//           />

//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             height='600'
//             className="d-block w-100"
//             src={image3}
//             alt="Third slide"
//           />

//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>

//       </Carousel>


//     </div>
//   );
// }

// export default Carousel1; 