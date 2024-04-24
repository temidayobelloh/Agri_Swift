import React, { useState } from 'react';
import './product-list.css';

const ProductList = () => {
  // State variables to manage selected values for each select element
  const [product, setProduct] = useState('Meat');
  const [type, setType] = useState('Type');
  const [quantity, setQuantity] = useState('Quantity');
  const [price, setPrice] = useState('Prices');
  const [status, setStatus] = useState('Status');

  return (
    <div className="product-list-container">
      <div className="select-container">
        <select value={product} onChange={(e) => setProduct(e.target.value)}>
          <option value="Meat">Meat</option>
          <option value="Product #12736">Product #12736</option>
          <option value="Product #12736">Product #12736</option>
          <option value="Product #12736">Product #12736</option>
          <option value="Product #12736">Product #12736</option>
        </select>
      </div>

      <div className="select-container">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Type">Type</option>
          <option value="Sheep">Sheep</option>
          <option value="Cow">Cow</option>
          <option value="Goat">Goat</option>
          <option value="Rabbit">Rabbit</option>
        </select>
      </div>

      <div className="select-container">
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          <option value="Quantity">Quantity</option>
          <option value="2 Carton(s)">2 Carton(s)</option>
          <option value="6 Carton(s)">6 Carton(s)</option>
          <option value="17 Carton(s)">17 Carton(s)</option>
          <option value="0 Pack(s)">0 Pack(s)</option>
        </select>
      </div>

      <div className="select-container">
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="Prices">Prices</option>
          <option value="N 20,000">N 20,000</option>
          <option value="N 60, 000">N 60, 000</option>
          <option value="N 170,000">N 170,000</option>
          <option value="N 1000">N 1000</option>
        </select>
      </div>

      <div className="select-container">
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Status">Status</option>
          <option value="In stock">In stock</option>
          <option value="In stock">In stock</option>
          <option value="In stock">In stock</option>
          <option value="In stock">In stock</option>
        </select>
      </div>
    </div>
  );
}

export default ProductList;
