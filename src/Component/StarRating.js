import React, { useState } from 'react';
import ReactStars from 'react-stars';

function StarRating() {
  const [rating, setRating] = useState(2);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div>
      <ReactStars
      count={5}
      onChange={handleStarClick}
      size={24}
      value={rating} 
      activeColor='#ffd700'
      color2={'#f8e71c'}  //Active color
      />
      <p style={{fontSize: '13px'}}>You Rated: {rating} Stars</p>
   </div>
  );
}

export default StarRating;