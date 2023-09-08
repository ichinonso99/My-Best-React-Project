import React from 'react';
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import add from './images/add.png'
// import Categories from '../Component/Categories';

function Header() {
  const productsobj = useSelector((store) => store.cartReducer)


  return (
    <div>
      <nav className=" nav-ul navbar-expand-lg navbar-primary "  style={{background:'rgb(18, 160, 216)' }}>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <form className="d-flex " role="search" style={{ marginLeft:'10px' }}>
              <li className="nav-item navs" >
                {/* <Categories/> */}
              </li>
              
              <input className="Header1 form-control me-2 mt-3 navs" type="search" placeholder="Search" aria-label="Search" style={{ width: '500px', height: '30px' }}/>
              <button className="Header2 btn btn-outline-primary mt-3" type="submit" style={{ height: '30px' }}>Search</button>

              {/* add to cart icon.................. */}
              <li className='nav-item  mt-2 navs' >
              <Link to='/show' className='nav-link' href='#'>
              <img src={add} alt="{./images/add}" style={{ width: '30px', height: '20px'}}/>
              <span className='badge bg-danger'style={{fontSize: '1rem', padding:'6px', height: '25px', borderRadius:'50%' }}>{productsobj.products.length}</span>
              </Link>
              </li>
            </form>
            </ul>
   
      </nav>
 </div>
  )
}
export default Header;