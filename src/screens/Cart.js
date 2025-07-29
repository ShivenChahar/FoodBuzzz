import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3 text-info">The Cart is Empty!</div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem('userEmail');

    const response = await fetch('http://localhost:5000/api/auth/orderData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toISOString(),
      }),
    });

    if (response.status === 200) {
      dispatch({ type: 'DROP' });
      alert('Order placed-Successfully!');
    } else {
      alert('Failed to place order. Please try again.');
    }
  };

  const totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover bg-dark">
          <thead className="text-info fs-4">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Option</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={`${food.id}-${food.size}`}>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn p-0"
                    onClick={() => dispatch({ type: 'REMOVE', index })}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 className="fs-2 text-info">Total Price: {totalPrice}/-</h1>
        <button className="btn bg-info mt-5" onClick={handleCheckOut}>
          Check Out
        </button>
      </div>
    </div>
  );
}
