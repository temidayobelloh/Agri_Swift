import React, { useState } from 'react';
import './sign-up.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    password: '',
    retypePassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log the form values to the console
    alert('Sign up successful!'); // Show alert for successful sign up
  };

  return (
    <>
      <div></div>
      <div className='second-sign-up-container'>
        <form className="sign-up" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="form-fields">
            <label htmlFor="fullname">Full name:</label>
            <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="John Champion" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="E.g JohnChampion@email.com" />

            <label htmlFor="phoneNumber">Number:</label>
            <input type="number" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="08123456789" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Min of 8 characters" />

            <label htmlFor="retypePassword">Retype Password:</label>
            <input type="password" id="retypePassword" name="retypePassword" value={formData.retypePassword} onChange={handleChange} placeholder="Retype your password" />
          </div>
          
          <button className="sign-up-submit" type="submit">Sign Up</button>
          <h4 className='or-button'>Or</h4>
          <button className="sign-up-google-button">Sign Up with Google</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
