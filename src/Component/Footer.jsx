import React from 'react'
import DateTime from '../inc/DateTime';
import whatssap from "../Component/images/whatssap.png";
import fb from "../Component/images/fb.png";
import youtube from "../Component/images/youtube.png";
import agu from "../Component/mycv/agu.docx";
import "./Media.css";
import { Link, NavLink } from 'react-router-dom';

function Footer() {

  // function to get the date
  const day = new Date
  const today = day.getFullYear()

  return (
    <div style={{ marginTop: '50px', background: 'skyblue' }}>

      <div className=' footer m-4 d-flex' >
        <div className='mt-5' style={{ marginLeft: '25px' }}>
          <h3>ChiscoStore:</h3>
          <p>At ChiscoStore, we are  <br />
            passionate about  providing  <br />
            the latest online shopping  <br />
            experience for our customers. <br />
            With  a wide range of products <br />
            across various categories, we<br />
            strive  to offer convenience,<br />
            quality, and value.</p>
        </div>
        <div className='mt-5' style={{ marginLeft: '25px' }}>
          <h3>OPENING HOURS:</h3>
          <p>MONDAY.......9:00-22:00</p>
          <p>TUESDAY......9:00-22:00</p>
          <p>WEDNESDAY....9:00-22:00</p>
          <p>THURSDAY.....9:00-22:00</p>
          <p>FRIDAY.......9:00-22:00</p>
          <p>SATURDAY.....9:00-22:00</p>
        </div>

        <div className='mt-5' style={{ marginLeft: '25px' }}>
          <h2>Quick Links:</h2>
          <a href="/">Home</a> <br />
          <a href="about" >About</a> <br />
          <a href="contact">Contact</a> <br />
          <a href="blog">Blog</a>
        </div>

        <div className='mt-5' style={{ marginLeft: '25px' }}>
          <h2>Shop Now:</h2>
          <a href="all" style={{ textDecoration: 'none' }}>Products</a> <br />
          <a href="trendingProducts" style={{ textDecoration: 'none' }}>Trending Products</a> <br />
          <a href="latestProducts" style={{ textDecoration: 'none' }}>Latest Products</a> <br />
          <a href="music" style={{ textDecoration: 'none' }}>Download Musics</a> <br />
          <a href="videos" style={{ textDecoration: 'none' }}>View Our Videos</a>
        </div>

        <div className='mt-5' style={{ marginLeft: '25px' }}>
          <h2>Reach Us:</h2>
          <a href="callto:+2349151882828" style={{ textDecoration: 'none' }}>Call Us</a> <br />
          <a href="mailto:ichinonso99@gmail.com" style={{ textDecoration: 'none' }}>e-mail Us</a> <br />
          <a href={agu}>DOWNLOAD RESUME</a>
        </div>

        <div className=' mt-5' style={{ textAlign: 'center', marginLeft: '25px' }}>
          <h5>Also reach us with:</h5>
          <a href="https://wa.me/+2349151882828"><img src={whatssap} className="rounded-circle mt-3" style={{ height: '35px', backgroundColor: 'green' }} /></a>
          <a href="https://mobile.facebook.com/home.php?ref_component=mbasic_home_header&ref_page=XDeviceBasedLoginValidatePinController&paipv=0&eav=AfaGicNZU8pDhM6W2_D9jiUayBbrg3pTpceFLORwQHTzGKcfqLSW7pyQ4TI8EIKeufg&_rdc=1&_rdr&wtsid=rdr_0wJz7XZ63e0RfPlag">
            <img src={fb} className="rounded-circle mt-3" style={{ height: '35px', marginLeft: '20px' }} /></a>
          <a href="https://www.youtube.com"><img src={youtube} className="rounded-circle mt-3" style={{ height: "35px", marginLeft: '20px' }} /></a>
        </div>
      </div>


      <div style={{ textAlign: 'center', paddingBottom: '20px', marginTop: '50px', background: 'black', color: 'white' }}>
        <p className='mt-5'><DateTime /></p>
        <p>Copyright ©2023 - ©{today} All rights reserved. </p>
      </div>
    </div>
  );
}

export default Footer;