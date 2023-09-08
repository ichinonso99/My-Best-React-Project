import React from 'react'
import DateTime from '../inc/DateTime';
import whatssap from "../Component/images/whatssap.png";
import fb from "../Component/images/fb.png";
import youtube from "../Component/images/youtube.png";
import agu from "../Component/mycv/agu.docx";
import "./Media.css";

function Footer() {
  return (
    <div style={{ marginTop: '50px', background:'skyblue' }}>

<div className=' footer m-4 d-flex' >
      <div  className='mt-5' style={{ marginLeft: '30px' }}>
        <h3>OPENING HOURS:</h3>
        <p>MONDAY.......9:00-22:00</p>
        <p>TUESDAY......9:00-22:00</p>
        <p>WEDNESDAY....9:00-22:00</p>
        <p>THURSDAY.....9:00-22:00</p>
        <p>FRIDAY.......9:00-22:00</p>
        <p>SATURDAY.....9:00-22:00</p>
      </div>

      <div  className='mt-5' style={{ marginLeft: '30px' }}>
        <h2>LOCATIONS:</h2>
        <p>Location 1: 9 Ikeja layout</p>
        <p>Location 2: 4 Adekunle Street Ikeja</p>
      </div>

      <div  className='mt-5' style={{ marginLeft: '30px' }}>
        <h2>PRODUCTS:</h2>
        <a href="Ladies/ladies.html" style={{textDecoration: 'none'}}>Women Accessaries</a> <br />
        <a href="Men/men.html" style={{textDecoration: 'none'}}>Men Accessaries</a> <br />
        <a href="Cars/car.html" style={{textDecoration: 'none'}}>Cars</a> <br />
        <a href="#" style={{textDecoration: 'none'}}>Electronics</a> <br />
        <a href="Drinks/drink.html" style={{textDecoration: 'none'}}>Jewelery</a> <br />
        <a href="#" style={{textDecoration: 'none'}}>Musics</a>
      </div>

      <div  className='mt-5' style={{ marginLeft: '30px' }}>
        <h2>CONTACT US:</h2>
        <a href="callto:+2349151882828" style={{ textDecoration: 'none' }}>Call Us</a> <br />
        <a href="mailto:ichinonso99@gmail.com" style={{ textDecoration: 'none' }}>e-mail Us</a> <br />
        <a href={agu}>DOWNLOAD RESUME</a>
      </div>
        
        <div className=' mt-5' style={{ textAlign: 'center', marginLeft: '30px' }}>
          <h5>You can as well reach us with:</h5>
          <a href="https://wa.me/+2349151882828"><img src={whatssap} className="rounded-circle mt-3" style={{ height: '35px', backgroundColor: 'green' }} /></a>
          <a href="https://mobile.facebook.com/home.php?ref_component=mbasic_home_header&ref_page=XDeviceBasedLoginValidatePinController&paipv=0&eav=AfaGicNZU8pDhM6W2_D9jiUayBbrg3pTpceFLORwQHTzGKcfqLSW7pyQ4TI8EIKeufg&_rdc=1&_rdr&wtsid=rdr_0wJz7XZ63e0RfPlag">
          <img src={fb} className="rounded-circle mt-3" style={{ height: '35px', marginLeft: '20px' }} /></a>
          <a href="https://www.youtube.com"><img src={youtube} className="rounded-circle mt-3" style={{ height: "35px", marginLeft: '20px' }} /></a>
        </div>
      </div>
  

      <div className='mt-5' style={{ textAlign: 'center', paddingBottom: '20px', marginTop: '50px', background:'skyblue' }}>
        <DateTime/>
        <p>Copyright ©2023 All rights reserved | This template is developed  <a href="#"> by ChiscoStore</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;