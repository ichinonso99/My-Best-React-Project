import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import add from './images/add.png'

function Header({ inputSearch, handleSearchFunction }) {
  const productsobj = useSelector((store) => store.cartReducer)


  return (
    <div>
      <nav className="header navbar nav-ul navbar-expand-lg p-3 navbar-primary ">

        <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">
          <form className="d-flex " role="search" style={{ marginLeft: '10px' }}>
            <li className="nav-item navs" >
              {/* <Categories/> */}
            </li>
              {/* this is search button */}
              <input className="Header1 form-control me-2 mt-3 navs" type="search" placeholder="Search your Product" aria-label="Search"
              style={{ width: '900px', justifyContent: 'center', height: '30px' }} value={inputSearch} onChange={handleSearchFunction} />
            {/* <button className="Header2 btn btn-outline-primary mt-3" type="submit" style={{ height: '30px' }}>Search</button> */}
          </form>
        </ul>

      </nav>
    </div>
  )
}
export default Header;