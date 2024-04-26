import React from 'react';
import './settings.css';
import user from '../../assets/user-icon.svg';

const Settings = () => {
  return (
    <div className='settings-container'>
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
        <div className='layout-one'> <img className='users' src={user} alt="icon"/> <b className='heading'>Account</b><p className='sub-heading'>Account setting for personalization options for a tailored experience</p></div>
        <div className='layout-one'> <img className='users' src={user} alt="icon"/> <b className='heading'>Notification</b><p className='sub-heading'>Account setting for personalization options for a tailored experience</p></div>
        <div className='layout-one'> <img className='users' src={user} alt="icon"/> <b className='heading'>General</b><p className='sub-heading'>Account setting for personalization options for a tailored experience</p></div>
        <div className='layout-one'> <img className='users' src={user} alt="icon"/> <b className='heading'>Accessibility</b><p className='sub-heading'>Account setting for personalization options for a tailored experience</p></div>
        <div><p className='para'>Hello</p></div>
      </div>
    </div>
  );
}

export default Settings;
