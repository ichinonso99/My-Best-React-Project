import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import '../inc/ScrollingText.css';

function Testimonies() {

  // Local state for products, error, and loading
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/testimonie/', { timeout: 5000 });
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
      <h3 className='mt-5'>Testimonies</h3>
      <hr></hr>
      <div className='container mt-3 col-md-4'>
        <div className='row justify-content-center'>
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
                <div className='shadow p-3 mb-6 bg-body rounded mt-3 m-2' data-aos='zoom-in'>
                  <h2 style={{ textAlign: 'center' }}> {product.name} </h2>
                  <img
                    height='25%'
                    width='60%'
                    className="d-block mx-auto rounded-circle"
                    src={product.image}
                    alt="First slide"
                  />
                  <p> {product.description} </p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonies;