import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import add from './images/add.png'

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
    <div className='sticky'>
      <nav class="navbar navbar-expand-lg navbar-primary" style={{ background: 'skyblue' }}>
        <div class="container-fluid sticky-top">
        <a class="navbar-brand" href="/" style={{ color: 'white' }}>Chisco<span>Store</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        {/* the add to cart section for media querry */}
          <div className='nav-item  mt-2 cartlogo'  style={{ display:'none' }}>
              <Link to='/show' className='nav-link' href='#'>
                <img src={add} alt="{./images/add}" style={{ width: '30px', height: '20px' }} />
                <span className='badge bg-danger' style={{ padding: '6px', height: '25px', borderRadius: '50%' }}>{productsobj.products.length}</span>
              </Link>
            </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <NavLink to="/" class="nav-NavLink active" aria-current="page" href="#" style={navStyle}>Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/about" class="nav-NavLink" href="#" style={navStyle}>About</NavLink>
              </li>
              {/* <li class="nav-item">
                <NavLink to="/contact" class="nav-NavLink" href="#" style={navStyle}>Contact</NavLink>
              </li> */}
              <li class="nav-item">
                <NavLink to="/all" class="nav-NavLink" href="#" style={navStyle}>Products</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/blog" class="nav-NavLink" href="#" style={navStyle}>Blog</NavLink>
              </li>
{/* 
              <ul className='Navbarr2'>      */}
        <li class="nav-item">
          <NavLink to="/logIn" class="nav-NavLink active" aria-current="page" href="#" style={navStyle}>LogIn</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/signUp" class="nav-NavLink" href="#" style={navStyle}>Register</NavLink>
        </li>   
            </ul>

            <form class="d-flex" role="search">
            {/* add to cart icon.................. */}
            <div className='nav-item  mt-2 navs cartlogos' >
              <Link to='/show' className='nav-link' href='#'>
                <img src={add} alt="{./images/add}" style={{ width: '30px', height: '20px' }} />
                <span className='badge bg-danger' style={{ padding: '6px', height: '25px', borderRadius: '50%' }}>{productsobj.products.length}</span>
              </Link>
            </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;