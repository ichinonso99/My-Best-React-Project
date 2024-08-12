import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';

function ProductDetails() {

   // fUNCTION TO NAVIGATE
  const navigate = useNavigate();

  const [reads, setReads] = useState(false);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const countobj = useSelector((store) => store.cartReducer.products);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/Product/')
      setProducts(data);
    } catch (error) {
      console.error("Error fetching product:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

    // Find single product
    const product = products.find((item) => item.id === Number(productId));
    console.log(product)
    if (!product) {
      return <p>product not foud</p>
    }

  // use the find method to find if the user already added an item to the card
  const isInCart = (productId) => {
    return countobj.find((item) => item.id === productId);
  };

    // Create a function to addCart
  const addCart = (productId) => {
    if (product) {
      dispatch({ type: "ADD", payload: product });
      toast.success('Item successfully added to cart');
    }
  };


  // Delete Products
  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:8000/api/${productId}/`)
    alert('Are you sure you want to delete?')
    navigate('/all')
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }} className=' container jc-center mt-3'>Cart Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='ProductDetails2 row mt-3'>
          <div key={product.id} className='col-md-6' data-aos='zoom-in'>
            <div className="ProductDetails">
              <img
                src={product?.image}
                alt={product?.name}
                style={{ width: '500px', height: '300px', marginLeft: '20px' }} />
            </div>
          </div>
          <div className='Details col-md-6'>
            <h3 className='mt-2'>Category: {product.category} </h3>
            <h3 className='mt-2'>Description: {product.description} </h3>
            <h5 className='mt-3'>Price: ${product.price}  <span className="text-danger"> &nbsp;<strike>${product.price * 2}</strike></span> </h5>
            <h5>Name: {product.name} </h5>
          </div>
          <br></br>
        </div>
      )}
      <div className="view" style={{ marginLeft: '40%' }}>
        <button className='go p-1'style={{ height: '30px', borderColor: 'blue', color: 'black' }} onClick={() => navigate(-1)}>Go Back</button>
        {isInCart(product.id) ? (
          <button className='cart p-1 m-4' disabled onClick={() => addCart(product.id)} style={{ cursor: "pointer", height: '30px', borderColor: 'blue', color: 'black' }}>ADD TO CART</button>
        ) : (
          <button className='cart p-1 m-4' onClick={() => addCart(product.id)} style={{ cursor: "pointer", height: '30px', borderColor: 'blue', color: 'black' }}>ADD TO CART</button>
          )} <br></br>
      <Link className='btn btn-primary m-2' to={`/all/${product.id}/edit/`} >Edit</Link>
      <Link className= 'btn btn-danger m-2' onClick={() => deleteProduct(product.productId)}>Delete</Link>
      </div>
      <hr></hr>
    </div>
  );
}
export default ProductDetails;


