import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import image2 from './images/image2.jpg'
import image1 from './images/image1.jpg'
import image3 from './images/image3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

function Carousel1() {
    
      const [index, setIndex] = useState(0);
    
      const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };
    
      return (
        <div >
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img data-aos='zoom-in'
              height='600'
              className="d-block w-100"
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height='600'
              className="d-block w-100"
              src={image2}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height='600'
              className="d-block w-100"
              src={image3}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        </div>
      );
    }

export default Carousel1; 