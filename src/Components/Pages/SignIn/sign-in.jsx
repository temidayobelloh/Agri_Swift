import React, { useState } from 'react';
import './sign-in.css';
import { BackgroundComponent } from '../../Background/background-component';

const SignInPage = () => {
  // State variables for managing form inputs
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for input change
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  // Event handler for password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare the data to be sent to the backend
    const userData = {
      name: name,
      password: password
    };

    try {
      // Send the data to the backend using fetch or any other method
      const response = await fetch('backend_endpoint_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      // Handle the response from the backend
      if (response.ok) {
        // Data successfully sent to the backend
        console.log('Data sent successfully!');
      } else {
        // Error occurred while sending data to the backend
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      // Handle network errors
      console.error('Error:', error);
    }
  }

  return (
    <div className="sign-in-page">
      {/* Render the background component */}
      <BackgroundComponent />
      <div className="right-section">
        <div className="sign-in-form">
          {/* Sign-in form */}
          <p className='sign-in-text'>Sign In</p>
          <form onSubmit={handleSubmit}>
            {/* Fullname input */}
            <label className='label-email'>Fullname</label>
            <input type="text" placeholder="Enter your fullname" value={name} onChange={handleNameChange} />

            {/* Password input */}
            <label className='label-password'>Password</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />

            {/* Submit button */}
            <button type="submit" className="sign-in-button">Sign in</button>
          </form>

          {/* Alternative sign-in options */}
          <p className='alternative-sign-in'>Or</p>
          <button className="sign-in-with-google-button">Sign in with Google</button>

          {/* Sign-up prompt */}
          <p className='prompt'>Don't have an Account? <b>Sign Up</b></p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
