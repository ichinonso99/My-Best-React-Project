// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link, NavLink } from 'react-router-dom';
// import add from './images/add.png'

// function Navbar2({ inputSearch, handleSearchFunction }) {
//   const productsobj = useSelector((store) => store.cartReducer)

//   // Function to insert active NavLink
//   const navStyle = ({ isActive }) => {
//     return {
//       color: isActive ? "yellow" : "white",
//       margin: isActive ? "30px" : "30px",
//       textDecoration: isActive ? "none" : "none",
//       fontWeight: isActive ? "bold" : "",
//     }
//   }


//   return (
//     <div class="navbarr" >
//     <div class="menu" >
//       <div>
//         <a class="navbar-brand" href="/" style={{ color: 'white', marginLeft:'10px' }}>Chisco<span>Store</span></a>
//       </div>

//       <ul className='Navbarr2'>     
//         <li class="nav-item">
//           <NavLink to="/logIn" class="nav-NavLink active" aria-current="page" href="#" style={navStyle}>LogIn</NavLink>
//         </li>
//         <li class="nav-item">
//           <NavLink to="/signUp" class="nav-NavLink" href="#" style={navStyle}>Register</NavLink>
//         </li>

//         {/* <div class="btn-group" role="group">
//                     <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
//                         Account
//                     </button>
//                     <ul class="dropdown-menu">
//                         <li><NavLink to="" class="dropdown-item" href="">user</NavLink></li> <br></br>
//                         <li><NavLink to="" class="dropdown-item" href="">Logout</NavLink></li>            
//                     </ul>
//                 </div> */}
//       </ul>
//       <div>
      
//         <div>
//         {/* add to cart icon.................. */}
//         <li className='Heder3 nav-item  mt-2 navs' >
//           <Link to='/show' className='Heder3 nav-link' href='#'>
//             <img src={add} alt="{./images/add}" style={{ width: '30px', height: '20px' }} />
//             <span className='Heder3 badge bg-danger' style={{ padding: '6px', height: '25px', borderRadius: '50%' }}>{productsobj.products.length}</span>
//           </Link>
//         </li>
//       </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Navbar2;