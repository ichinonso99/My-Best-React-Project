import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert';
import whatssap from "../Component/images/whatssap.png";
import fb from "../Component/images/fb.png";
import youtube from "../Component/images/youtube.png";
import LogIn from './LogIn';

function Contact() {
  const navigate = useNavigate()

  // Create a bootstrap alert message
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwords, setPasswords] = useState('');

  // Create a function called handleSubmit
  const handleSubmit = () => {

    // Check for empty fields
    if (username === '' || email === '' || password === '' || passwords === '') {
      setShowError(true)
      setShowSuccess(false)
      // alert("fields cannot be empty")
      // Swal("Empty Fields", "Please fill the required field", "error");
    }
    else if (password !== passwords) {
      setShowError(true)
      setShowSuccess(false)
      // alert("Please confirm your password")
      Swal("Empty Fields", "Please fill the required field", "error");
      setTimeout(() => {
        navigate("/LogIn")
      }, 2000);
    }
    else {
      // function to save user details in local storage
      let user = {
        username: username,
        email: email,
        password: password
      }
      localStorage.setItem("users", JSON.stringify(user))

      // alert("Congratulations {username}! Forms successfully submitted")
      Swal("Successfully Registered", "You have been successfully registered", 'successful')
      setShowSuccess(true)
      setShowError(false)

      setTimeout(() => {
        navigate("/LogIn")
      }, 2000);
    }
  }


  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-5 shadow p-3 mb-5 bg-body rounded'>
          {showSuccess && (
            <div class="alert alert-success" role="alert">
              {/* Successfully Registered */}
              {/* Congratulations {username}! Forms successfully submitted */}
            </div>
          )}
          {showError && (
            <div class="alert alert-danger" role="alert">
              Please fill the required field
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <h1 className='text-center'>Registeration Form</h1>
            <div className='mb-3'>
              <label for="exampleFormControlInput1" classn="form-label">Username</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Username"
                value={username} onChange={(e) => setUsername(e.target.value)}>
              </input>
            </div>
            <div className='mb-3'>
              <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email"
                value={email} onChange={(e) => setEmail(e.target.value)}>
              </input>
            </div>
            <div className='mb-3'>
              <label for="exampleFormControlInput1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Password"
                value={password} onChange={(e) => setPassword(e.target.value)}>
              </input>
            </div>
            <div className='mb-3'>
              <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
              <input type="confirm-password" class="form-control" id="exampleFormControlInput1" placeholder="Confirm Your Password"
                value={passwords} onChange={(e) => setPasswords(e.target.value)}>
              </input>
            </div>
            <div className='d-grid gap-2'>
              <button className='btn btn-primary' type='submit'>SignUp</button>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p class="link mt-3">Already have an acccount?</p>
              <Link to={"/logIn"} style={{ textAlign: 'center' }}>LogIn </Link> here
            </div>

{/* the social media section, like facebook, youtube and etc */}
            <div className=' mt-3' style={{ textAlign: 'center', marginLeft: '30px' }}>
              <h5>You can as well reach us with:</h5>
              <a href="https://wa.me/+2349151882828"><img src={whatssap} className="rounded-circle " style={{ height: '35px', backgroundColor: 'green' }} /></a>
              <a href="https://mobile.facebook.com/home.php?ref_component=mbasic_home_header&ref_page=XDeviceBasedLoginValidatePinController&paipv=0&eav=AfaGicNZU8pDhM6W2_D9jiUayBbrg3pTpceFLORwQHTzGKcfqLSW7pyQ4TI8EIKeufg&_rdc=1&_rdr&wtsid=rdr_0wJz7XZ63e0RfPlag">
                <img src={fb} className="rounded-circle " style={{ height: '35px', marginLeft: '20px' }} /></a>
              <a href="https://www.youtube.com"><img src={youtube} className="rounded-circle " style={{ height: "35px", marginLeft: '20px' }} /></a>
            </div>

{/* the call us section like , email and others */}
            <div className='container mt-2' style={{ marginLeft: '15px', textAlign:'center' }}>
              <a href="callto:+2349151882828" style={{ textDecoration: 'none' }}>Call Us</a>  &nbsp;  &nbsp;  &nbsp;  &nbsp;
              <a href="mailto:ichinonso99@gmail.com" style={{ textDecoration: 'none' }}>e-mail Us</a> <br />
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact