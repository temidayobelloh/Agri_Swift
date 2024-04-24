import React, { useState } from 'react';
import orders from '../../assets/order-listings.svg';
const CropManagement = () => {
  const [search, setSearch] = useState('');

  return (
    <div className='product-listing-container'> {/* Container added */}
      <div className='product-nav-wrapper'>
        <div className='product-title-wrapper'>
          <p className='product-title'> Orders </p>
          <p className='product-title-sub'>Total products: 12,762</p>
        </div>
        <div>
          <input
            className='search-input-wrapper'
            type='text'
            value={search}
            placeholder='Search for products...'
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='user-title-wrapper'>
          <p className='user-title-name'>Maria Tolu</p> <p className='user-title-init'>MT</p>
        </div>
      </div>
      <div>
      <img src ={orders} alt ='order-list'/>
      </div>
    </div>
    
  );
}

export default CropManagement;
