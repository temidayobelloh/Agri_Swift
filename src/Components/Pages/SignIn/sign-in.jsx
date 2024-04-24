import React, { useState } from 'react';
import './sign-in.css';


const SignInPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userData = {
      name: name,
      password: password
    };

    try {
      const response = await fetch('backend_endpoint_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
      
        console.log('Data sent successfully!');
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="sign-in-page">
      <div>
          <p className='sign-in-text'>Sign In</p>
          <form onSubmit={handleSubmit}>
            <label className='label-email'>Fullname</label>
            <input type="text" placeholder="Enter your fullname" value={name} onChange={handleNameChange} />
            <label className='label-password'>Password</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
            <button type="submit" className="sign-in-button">Sign in</button>
          </form>
          <p className='alternative-sign-in'>Or</p>
          <button className="sign-in-with-google-button">Sign in with Google</button>
          <p className='prompt'>Don't have an Account? <b>Sign Up</b></p>
        </div>
      </div>
  );
}

export default SignInPage;
