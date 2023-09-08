import React from 'react'
import image2 from './images/image2.jpg'

function WhoWeAre() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='about col-md-6'>
          <img src={image2} alt="{./images/image1}"  style={{ height: "400px",width: "650px", }} data-aos='zoom-in' />
        </div>
        <div className='col-md-6' data-aos='zoom-in'>
          <p>    Hi, <strong>Welcome to ChiscoStore Shopping Mall !</strong> we are from Africa, Nigeria, and we <em><q>
            Design/Development</q></em>. I started
            <q>Web Design/Development</q> because I have a <span>strong passion for writing and wanted to inspire others
              to</span> start writing, too.
            After many years of trying to find a job that reflected my love for writing a programming, I decided to take
            matters into my own
            hands and start my own business. <em><q>Web Design/Development</q></em> is an all-in-one writing platform
            that can help fellow aspiring writers
            learn their own way with words. Since I started <em><q>Web Design/Development</q></em> in 2015, it’s
            <em>quickly become one of the most popular
              marketing platforms online, with more than 500,000 subscribers nationwide</em>. I’ve been in your
            shoes before, so here at <em><q>Web Design/Development</q></em>
            my goal is to help you achieve your writing dreams, whatever they may be.</p>
          {/* <h1>Who Are investor</h1> */}
          <p> I have a lot of <span>enthusiasm for life and am always looking for new</span> <em>opportunities to learn
            and grow.</em> I am flexible and can adapt
            to new situations and changes quickly and easily. I have a friendly personality and enjoy interacting with
            others. I am genuine,
            <span>enthusiasm for life and am always looking for</span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default WhoWeAre