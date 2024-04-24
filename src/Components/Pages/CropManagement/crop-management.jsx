import React, { useState } from 'react';
import orders from '../../assets/order-listings.svg';

const CropManagement = () => {
  const [customer, setCustomer] = useState('Customers');
  const [orderDate, setOrderDate] = useState('Order Dates');
  const [address, setAddress] = useState('Address');
  const [products, setProducts] = useState('Orders');
  const [quantity, setQuantity] = useState('Quantity');
  const [amount, setAmount] = useState('Amount');
  const [status, setStatus] = useState('Status');

  return (
    <div className='product-listing-container'>
      <div className='product-nav-wrapper'>
        <div className='product-title-wrapper'>
          <p className='product-title'> Orders </p>
          <p className='product-title-sub'>Total products: 12,762</p>
        </div>
        <div>
          <input
            className='search-input-wrapper'
            type='text'
            placeholder='Search for products...'
          />
        </div>
        <div className='user-title-wrapper'>
          <p className='user-title-name'>Maria Tolu</p> <p className='user-title-init'>MT</p>
        </div>
      </div>
      <div className="select-container">
        <select value={customer} onChange={(e) => setCustomer(e.target.value)} className="select-element">
          <option>Customers</option>
          <option>Lizbeth Chioma</option>
          {/* Add more options here */}
        </select>

        <select value={orderDate} onChange={(e) => setOrderDate(e.target.value)} className="select-element">
          <option>Order Dates</option>
          <option>Mar 15, 2024, 6:35 PM</option>
          {/* Add more options here */}
        </select>

        <select value={address} onChange={(e) => setAddress(e.target.value)} className="select-element">
          <option>Address</option>
          <option>Elm street, 34 drive, Lagos</option>
          {/* Add more options here */}
        </select>

        <select value={products} onChange={(e) => setProducts(e.target.value)} className="select-element">
          <option>Orders</option>
          <option>Yam, Titus, Cow mean, Beans</option>
          {/* Add more options here */}
        </select>

        <select value={quantity} onChange={(e) => setQuantity(e.target.value)} className="select-element">
          <option>Quantity</option>
          <option>2 Tubers, 1 Carton, 2 Packs, Paint.</option>
          {/* Add more options here */}
        </select>

        <select value={amount} onChange={(e) => setAmount(e.target.value)} className="select-element">
          <option>Amount</option>
          <option>N23,000</option>
          {/* Add more options here */}
        </select>

        <select value={status} onChange={(e) => setStatus(e.target.value)} className="select-element">
          <option>Status</option>
          <option>In transit</option>
          {/* Add more options here */}
        </select>
      </div>
    </div>
  );
}

export default CropManagement;
