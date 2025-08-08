import React, { useEffect, useState, useRef } from 'react';
import { useDispatchCart} from './ContextReducer';
import './Card.css';

export default function Card(props) {
  const dispatch = useDispatchCart();
  const priceRef = useRef();

  const options = props.options;
  const priceOptions = Object.keys(options);

  const [qty, setQty] = useState('1');
  const [size, setSize] = useState('');

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  const handleAddToCart = () => {
    const numericQty = parseInt(qty);
    const unitPrice = parseInt(options[size]);

    dispatch({
      type: 'ADD',
      id: props.foodData._id,
      name: props.foodData.name,
      price: unitPrice,   // Unit price per item
      qty: numericQty,    // Incremental quantity
      size: size,
      img: props.ImgSrc,
    });
  };

  const finalPrice = qty * parseInt(options[size]);

  return (
    <div>
      <div>
        <div className="card-custom mt-2 position-relative">
          <img
            src={props.foodData.img}
            className="card-img-top"
            alt="..."
            style={{ height: '120px', objectFit: 'fill' }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodData.name}</h5>
            <div className="container w-100 ">
              <select
                className="m-2"
                onChange={(e) => setQty(e.target.value)}
                value={qty}
              >
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select
                className="m-2"
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
                value={size}
              >
                {priceOptions.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </select>

              <div className="price-badge">₹{finalPrice}/-</div>

            </div>
            <hr />
            <button className="btn-add ms-2" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
