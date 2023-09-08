import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function ShowCart() {
  const myCart = useSelector((store) => store.cartReducer.products);
  // const count = useSelector((store) => store.CounterReducer.count);
  const dispatch = useDispatch()

  // create a function to increase from cart
  const increase = () => {
    dispatch({ type: "ADD", payload: myCart })
  }
  // create a function to decrease from cart
  const decrease = () => {
    dispatch({ type: "MINUS", payload: myCart })
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <h1 style={{ textAlign: 'center' }}>Cart items: {myCart.length}</h1>
        <div className='col-md-8 mt-3'>
          <table className='table table-responsive table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Photo</th>
                <th scope='col'>Category</th>
                <th scope='col'>Price</th>
                <th scope='col'>+</th>
                <th scope='col'>...</th>
                <th scope='col'>-</th>
                <th scope='col'>Remove</th>
              </tr>
            </thead>
            {
              myCart.map((cart, i) => {

                // create a function to delete from cart
                const deleteProduct = () => {
                  if (window.confirm("Are you sure you want to delete ?", { cart })) {
                    dispatch({ type: "DELETE", payload: cart })
                  }
                }

                return (
                  <tbody>
                    <tr key={cart.id}>
                      <td>{i + 1}</td>
                      <td><img src={cart.image} alt={cart.name} width={100} height={100} /></td>
                      <td className='col-md-2'>{cart.category}</td>
                      <td><h6>${cart.price}</h6></td>
                      <td><button onClick={increase} >+</button></td>
                      <td>{myCart.length}</td>
                      <td><button onClick={decrease} >-</button></td>

                      <td className='col-md-2'><button className='btn btn-danger' onClick={() => deleteProduct({ type: "DELETE", payload: cart })}>Delete</button></td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default ShowCart