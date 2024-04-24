import React from 'react';
import Setting from '../../assets/account settings one.svg';
import display from '../../assets/Account settings.svg';

const Settings = () => {
  return (
    <div className='settings-wrapper'>
      <img src={Setting} alt='setting-icon'/>
      <img src={display} alt='setting-icon-two'/>
    </div>
  );
}

export default Settings;
