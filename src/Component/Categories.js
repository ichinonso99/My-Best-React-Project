import React from 'react';
import { data } from '../Component/Data';
import { useSelector } from 'react-redux';

function Categories() {
   const countobj = useSelector((store) => store.cartReducer.products);
  const electronicsProducts = data.filter(products => products.category === "men's clothing");
  const women = data.filter(products => products.category === "women's clothing");
  const elec = data.filter(products => products.category === "electronics");
  const jewelery = data.filter(products => products.category === "jewelery");
  const All = [electronicsProducts,women,elec,jewelery];
    
  return (
    <div class="btn-group mt-3" role="group" aria-label="Button group with nested dropdown">
  
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Categories
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="all">All Products</a></li>
        <li><a class="dropdown-item" href="men">Men's Clothing</a></li>
        <li><a class="dropdown-item" href="women">Women's Clothing</a></li>
        <li><a class="dropdown-item" href="electronics">Electronics</a></li>
        <li><a class="dropdown-item" href="jewelery">jewelery</a></li>
        <li><a class="dropdown-item" href="#">Musics</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Categories;