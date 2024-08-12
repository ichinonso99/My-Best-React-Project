import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WhoWeAre() {

  // Local state for products, error, and loading
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/about/', { timeout: 5000 });
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

  return (
    <div>
      
      {/* Render All Products */}
          {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
          {error && (
            <div>
              <p style={{ textAlign: 'center' }}>Error: {error}</p>
              <button onClick={fetchData} style={{ textAlign: 'center' }}>Retry</button>
            </div>
          )}
          {products.map((about) => (
  
  <div className=' container mt-3'>
  <div className=' row'>
  <div key={about.id} className='col-md-6' data-aos='zoom-in'>
    <div className='shadow'>
      <img src={about.image} alt={about.name} style={{ width: '35rem', height:'28rem', }} />
    </div>
  </div>
  <div className='shadow col-md-6' data-aos='zoom-in'>
    <h5>{about.title}  </h5>
    <h5>{about.body} <a href='tellMeAll'>Read more</a>  </h5>
  </div>
  <br></br>
</div>
</div>
          ))}
        </div>
  );
};

export default WhoWeAre;



// function WhoWeAre() {
//   return (

//     <div className='container-fluid mt-5' style={{ width: "95%" }}>
//     <div className='row'>
//           <div className='about col-md-6'>

//           <img src={image4} alt="{./images/image4}" style={{ height: "400px", width: "650px", }} data-aos='zoom-in' />
//         </div>

//         <div className='col-md-5 mt-3 shadow mb-5 bg-body rounded' style={{ margin: "auto" }}  data-aos='zoom-in' >
//           <p>    Hi, <strong>Welcome to ChiscoStore Shopping website!</strong> we are from Africa, Nigeria.
//             ChiscoStore Nigeria is the largest online shopping website in Nigeria. We offer a platform where customers in
//             any part of Nigeria can find and shop for all they need in one online store and that platform is the ChiscoStore
//             shopping website. On the ChiscoStore mobile app or website, you can shop from the comfort of your home or during
//             work breaks and get everything delivered fast without you having to stress or move an inch.
//             </p>
//           <p>
//             Shopping on ChiscoStore guarantees that you get the latest mobile phones, tablets, or phablets before anyone else. 
//             Buy trusted Apple iOS iPhones and iPads and quality Android brands like Samsung, Tecno, Xiaomi, Infinix, and many others! 
//             Unlock the best functionality of your smartphones when you buy our amazing phone accessories like AirPods, earphones, 
//             powerbank, Bluetooth speakers, durable phone cases, and many more! 
//           </p>
//         </div>
//         <a  className='btn btn-primary' href='tellMeAll'>Read more...</a>
//       </div>

//     </div>
//   )
// }

// export default WhoWeAre