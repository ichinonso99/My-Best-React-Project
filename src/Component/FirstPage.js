import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
// import Carousel from './Carousel'; // Import your carousel component
import Carousel from 'react-bootstrap/Carousel';

function FirstPage() {
  const navigate = useNavigate();
   

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');// Navigate to another page after 2 minutes
    }, 120000); // 2 minutes in milliseconds

    // Clear the timer when the component unmounts or when the user navigates away
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>This is the current page</h1>
      <Carousel /> {/* Render your carousel component */}
    </div>
  );
};

export default FirstPage