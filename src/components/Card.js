import React, { useEffect, useState, useRef } from 'react';
import { useDispatchCart} from './ContextReducer';

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
        <div className="card mt-2" style={{ width: '18rem', maxHeight: '360px' }}>
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
                className="m-2 h-100 bg-info rounded text-dark"
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
                className="m-2 h-100 bg-info rounded text-dark"
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

              <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
            </div>
            <hr />
            <button className="btn btn-info justify-center ms-2" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
