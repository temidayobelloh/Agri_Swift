import React, { useState } from 'react';
import './background-component.css';

export const BackgroundComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className='first-background'>
        <p className='logo'> Hi there, welcome to Agri Swift!</p>
        <div className="sign-up-wrapper">
          <div className='sign-up-container'>
              <input
                type="radio"
                value="Your Details"
                checked={selectedOption === 'Your Details'}
                onChange={() => handleOptionChange('Your Details')}
              />
              <label>Your Details </label>
            <br />
              <input
                type="radio"
                value="Email Verification"
                checked={selectedOption === 'Email Verification'}
                onChange={() => handleOptionChange('Email Verification')}
              />
              <label>Email Verification
            </label>
            <br />
              <input
                type="radio"
                value="Add your Work Details"
                checked={selectedOption === 'Add your Work Details'}
                onChange={() => handleOptionChange('Add your Work Details')}
              />
              <label>Add your Work Details
            </label>
          </div>
          <button className='sign-up-button'>Already have an account?</button>
        </div>
      </div>
    </div>
  );
}
