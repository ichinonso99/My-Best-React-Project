import React from 'react'
import { FaTv, FaWindows, FaAtlas } from 'react-icons/fa';
import blog3 from "../Component/images/blog3.jpeg"
import blog1 from "../Component/images/blog1.jpeg"
import blog2 from "../Component/images/blog2.jpeg"

function Blog() {
  return (
    <div className='container mt-5'>
      <div className='row gy-4 gx-4'>
        <div className='col-md-4 col-sm-6'>
          <div className='card text-center'>
            <div className='card-body'>
              <FaTv style={{ fontSize: '4rem' }} />
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up the bulk of the card's content
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-6'>
          <div className='card text-center'>
            <div className='card-body'>
              <FaWindows style={{ fontSize: '4rem' }} />
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up the bulk of the card's content
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-6'>
          <div className='card text-center'>
            <div className='card-body'>
              <FaAtlas style={{ fontSize: '4rem' }} />
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up the bulk of the card's content
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className='col-md-4 col-sm-6'>
          <div className='card text-center'>
            <div className='card-body'>
              <img src={blog3} class="card-img-top" alt="blog3" style={{width:'8rem',  margin: 'auto'}}/>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up the bulk of the card's content
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-6'>
          <div className='card text-center'>
            <div className='card-body'>
              <img src={blog2} class="card-img-top" alt="blog3" style={{width:'8rem',  margin: 'auto'}}/>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up the bulk of the card's content
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-6'>
          <div className='card text-center'>
            <div className='card-body'>
              <img src={blog1} class="card-img-top" alt="blog3" style={{width:'8rem',  margin: 'auto'}}/>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up the bulk of the card's content
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Blog;