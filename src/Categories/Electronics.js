import { data } from '../Component/Data';

function Electronics() {
  const electronicsProducts = data.filter(products => products.category === "electronics");


  return (
    <div>
      <h2 className='text-center'>All Electronics Products</h2>
      <div className='container' >
      <div className='row'>
      <ul>
        {electronicsProducts.map(product => (
            <li key={product.id}>
                <div className='col-md-3 shadow p-3 mb-5 bg-body rounded mt-3 m-3' style={{ textAlign: 'center', width: "20rem" }} data-aos='zoom-in'>
            <img src={product.image} alt={product.title} style={{ width: '600px', height: '550px' }}/>
        </div>
            <h3>CATEGORY: {product.category} </h3>
            <h5>DESCRIPTION: {product.description} </h5>
            <h5>PRICE: ${product.price} </h5>
            <h5>TITLE: {product.title} </h5>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default Electronics;