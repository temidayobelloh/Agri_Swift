import React from 'react';
import './settings.css';

const Settings = () => {
  return (
    <div>
      <div className='product-nav-wrapper'>
        <div className='product-title-wrapper'>
          <p className='product-title'> Settings </p>
        </div>
        <div className='search-input'>
          <input
            className='search-input-wrapper'
            type='text'
            placeholder='Search for products...'
          />

        </div>
        <div className='user-title-wrapper'>
          <p className='user-title-name'>Maria Tolu</p> <p className='user-title-init'>(MT)</p>
        </div>
      </div>
      <div className='settings-layout'>
        <div className='layout-one'> <img alt="icon"/> <b>Account</b><p>Account setting for personalization options for a tailored experience</p></div>
        <div className='layout-one'> <img alt="icon"/> <b>Notification</b><p>Account setting for personalization options for a tailored experience</p></div>
        <div className='layout-one'> <img alt="icon"/> <b>General</b><p>Account setting for personalization options for a tailored experience</p></div>
        <div className='layout-one'> <img alt="icon"/> <b>Accesibility</b><p>Account setting for personalization options for a tailored experience</p></div>
        <div className='layout-one'> <img alt="icon"/> <b>Help & Support</b><p>Account setting for personalization options for a tailored experience</p></div>
        </div>
    </div>
  );
}

export default Settings;
