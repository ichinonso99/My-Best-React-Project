// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// import { data } from './Data';

// function Men() {
//   // const [product, setProduct] = useState([]);

//   // useEffect(() => {
//   //   axios.get(data)

//   //   .then(Response => {
//   //     setProduct(Response.data);
//   //   })
//   //   .catch(error => {
//   //     console.error('Error fetching products:' , error);
//   //   } );
//   // }, []);

//   // Filter electronics products
//   const electronicsProducts = data.filter(products => products.category === 'electronics');

//   return (
//     <div>
//       <h2>Electronics products</h2>
//       <ul>

//         {electronicsProducts.map(product => (
//           <li key={product.id}>
//             <img src={product.image} alt={product.title} style={{ width: '600px', height: '550px' }}/>
//             <h3>CATEGORY: {product.category} </h3>
//             <h5>DESCRIPTION: {product.description} </h5>
//             <h5>PRICE: ${product.price} </h5>
//             <h5>TITLE: {product.title} </h5>
//           </li>
//         ))}

//       </ul>
//     </div>
//   );
// };

// export default Men