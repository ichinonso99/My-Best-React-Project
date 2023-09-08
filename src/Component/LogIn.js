import React, { useState } from 'react';
import Swal from 'sweetalert';

function LogIn() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Create a function called handleSumit
  const handleSubmit = () => {

    if (username === '' || password === '') {
      Swal("Empty Fields", "Please fill the required field", "error");
    }

    else {
      let userData = JSON.parse(localStorage.getItem('users'))
      if (username === userData.username && password === userData.password) {
        // window.open("index.html");
        Swal("Successfully LogIn", "You have been successfully Logged In", 'successful')

        setTimeout(() => {
          window.open("contact");
        }, 2000);
      }
      else {
        alert("Invalid username and password")
      }
    }

  }
  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-5 shadow p-3 mb-5 bg-body rounded'>
          <form onSubmit={handleSubmit}>
            <h1 className='text-center'>logIn</h1>
            <div className='mb-3'>
              <label for="exampleFormControlInput1" classn="form-label">Username</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Username"
                value={username} onChange={(e) => setUsername(e.target.value)}>
              </input>
            </div>
            <div className='mb-3'>
              <label for="exampleFormControlInput1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Password"
                value={password} onChange={(e) => setPassword(e.target.value)}>
              </input>
            </div>
            <div className='d-grid gap-2'>
              <button className='btn btn-primary' type='submit'>logIn</button>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p class="link mt-3">Don't have an acccount?</p>
              <a href="logIn.js" style={{ textAlign: 'center' }}>SignUp</a>here
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn