import './background-component.css';

import { useState } from 'react';

export const BackgroundComponent = () => {
    const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div>
    <div className='first-background'>
        <p className='logo'>Logo</p>
        <p className='logo-title'>Call to action</p>
        <div className="sign-up-wrapper">
    <div className='sign-up-container'>
    <label>
            <input
              type="radio"
              value="Your Details"
              checked={selectedOption === 'Your Details'}
              onChange={() => handleOptionChange('Your Details')}
            />
            Your Details
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Email Verification"
              checked={selectedOption === 'Email Verification'}
              onChange={() => handleOptionChange('Email Verification')}
            />
            Email Verification
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Add your Work Details"
              checked={selectedOption === 'Add your Work Details'}
              onChange={() => handleOptionChange('Add your Work Details')}
            />
            Add your Work Details
          </label>
          <div/>
        </div>
        <button className='sign-up-button'>Already have an account?</button>
    </div>
    </div>
    </div>
  )
}
