import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import icon2 from './images/icon2.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Notiflix from "notiflix";
import { toast } from 'react-toastify';
import EmptyCartError from './EmptyCartError';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

function ShowCart() {
  const myCart = useSelector((store) => store.cartReducer.products);
  // const count = useSelector((store) => store.CounterReducer.count);
  const dispatch = useDispatch()

  // Create a notiflix called confirm delete
  const confirmDelete = (id) => {
    Notiflix.Confirm.show(
      "ChiscoStore confirm",
      "Are you sure you want to delete?",
      "Delete",
      "Cancel",
      function okCb() {
        deleteProduct(id)
        toast.success("Item deleted successfully")
      },
      function cancelCb() {
      },
      {
        width: "320px",
        borderRadius: "8px",
        // etc...
      }
    );
  };
  // create a function to delete from cart
  const deleteProduct = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };


  // fUNCTION TO NAVIGATE
  const navigate = useNavigate()
  return (
    <div className='container showCart'>
      <div className='row justify-content-center'>
        <img src={icon2} alt="{./images/icon2}" style={{ height: "250px" }} />
        <div className='col-md-10 mt-3'>
          <h1 style={{ textAlign: 'center' }}>Cart items: {myCart.length}</h1>
          {/* condition that shows the cart is empty */}
          {
            myCart.length === 0 ? <h3 style={{ color: 'red', margin: 'auto' }}><EmptyCartError /></h3> :
              <table className='table table-responsive table-hover'>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Photo</th>
                    <th scope='col'>Category</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Update</th>
                    <th scope='col'>Amount</th>
                    <th scope='col'>Remove</th>
                  </tr>
                </thead>
                {
                  myCart.map((cart, i) => {

                    // create a function to increaseCart from cart
                    const increaseCart = (cart) => {
                      dispatch({
                        type: "UPDATE_CART",
                        payload: { ...cart, quantity: cart.quantity + 1 },
                      });
                    };

                    // create a function to decreaseCart from cart
                    const decreaseCart = (cart) => {
                      if (cart.quantity !== 1) {
                        dispatch({
                          type: "UPDATE_CART",
                          payload: { ...cart, quantity: cart.quantity - 1 }
                        });
                      }
                    };

                    return (
                      <tbody>
                       <p className='tt'> {cart.category}</p>
                        <tr key={cart.id}>
                          <td className='th' >{i + 1}</td>
                          <td><img src={cart.image} alt={cart.name} width={100} height={100} /></td>
                          <td className='th col-md-2'>{cart.category}</td>
                          <td><h6 className='th'>${cart.price}</h6></td>
                          {/* button for increase in cart */}
                          <td> <span>
                            <AiFillPlusCircle style={{ fontSize: '24px', color: "green" }} onClick={() => increaseCart(cart)} />
                            <span style={{ fontSize: '20px', margin: '0 6px' }} >{cart.quantity}</span>
                            <AiFillMinusCircle style={{ fontSize: '24px', color: "red" }} onClick={() => decreaseCart(cart)} />
                          </span></td>
                          <td className='th'>${cart.price * cart.quantity}</td>
                          <td className='col-md-2'><button className='btn btn-danger' onClick={() => confirmDelete(cart)}>Delete</button></td>
                        </tr>
                      </tbody>
                    );
                  })
                }
              </table>
          }

          <div className='container mt-5' style={{ width: "80%" }}>
            <div className='row'>
              <div className='col-md-5 shadow p-3 mb-5 bg-body rounded' style={{ margin: "auto" }}>
                <button className='go p-1 m-4 btn btn-primary' onClick={() => navigate(-1)}>Go Back</button>
                <Link to={"/signUp"} ><button className='P-1 m-4 btn btn-primary'>Checkout</button></Link>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default ShowCart