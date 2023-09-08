import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import add from './images/add.png'
import Header from './Header';
// import { FaCartArrowDown } from "react-icons/fa";

function Navbar() {
  const productsobj = useSelector((store) => store.cartReducer)

  // Function to insert active NavLink
  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? "yellow" : "white",
      margin: isActive ? "30px" : "30px",
      textDecoration: isActive ? "none" : "none",
      fontWeight: isActive ? "bold" : "",
    }
  }


  return (
    <div>
       <Header/>
      <nav class="navbar navbar-expand-lg bg-secondary navbar-primary sticky-top">
        <div class="container-fluid sticky-top">
          <a class="navbar-brand" href="#" style={{color:'white'}}>Chisco<span>Store</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <NavLink to ="/" class="nav-NavLink active" aria-current="page" href="#" style={navStyle}>Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/about" class="nav-NavLink" href="#" style={navStyle}>About</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/filterProducts" class="nav-NavLink" href="#" style={navStyle}>Products</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/contact" class="nav-NavLink" href="#" style={navStyle}>Contact</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/blog" class="nav-NavLink" href="#" style={navStyle}>Blog</NavLink>
              </li>
              {/* <li class="nav-item">
                <NavLink to="/product" class="nav-NavLink" href="#" style={navStyle}>Product</NavLink>
              </li> */}
            </ul>
            {/* <form class="d-flex" role="search">
              <input class="form-control me-2 mt-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '200px', height: '30px' }}/>
              <button class="btn btn-outline-success mt-2" type="submit" style={{ height: '30px' }}>Search</button>

              <li className='nav-item'>
              <Link to='/show' className='nav-link' href='#'>
              <img src={add} alt="{./images/add}" style={{ width: '30px', height: '20px' }}/>
              <span className='badge bg-danger'style={{fontSize: '1rem', padding:'6px', height: '25px', borderRadius:'50%' }}>{productsobj.products.length}</span>
              </Link>
              </li>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar