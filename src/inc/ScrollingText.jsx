import React from 'react';
import './ScrollingText.css';
import Anouncement from './Anouncement';

function ScrollingText() {
  return (
    <div>
    <div className='scroll-container'>
      <div className='scroll-text  shadow bg-secondary text-white'>
        <h5 className=''>Welcome To ChiscoStore, We Deals With All King Of:  <em>Men's Clothing, </em><em>Jeweleries,<em></em> Women's Clothing</em> <em>And</em> <em>Electronics.</em></h5>
      </div> 
    </div>
      <Anouncement/>
    </div>
  );
}

export default ScrollingText