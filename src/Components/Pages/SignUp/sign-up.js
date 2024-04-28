import React, { useState } from 'react';
import './sign-up.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    password: '',
    retypePassword: ''
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const url = 'https://agriswift-backend.onrender.com/auth/register';
     
      const userData = {
        fullname: formData.fullname,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        retypePassword: formData.retypePassword
      };


       // Make a POST request to the backend
       const response = await axios.post(url, userData);

       // Handle the response
       console.log('Registration successful:', response);

      setConfirmationMessage(`Welcome ${formData.fullname}.. Please check your email for signup confirmation.`); 
      
      setTimeout (() => {
        navigate('/signin'); // Redirect to login page after 6 second
      }, 6000)
      

    } catch (error) {
      console.error('Error occurred:', error.response.data);
      alert('Sign up failed. Please try again.'); // Show alert for failed sign up
    }
  
  };

  return (
    <>
      <div></div>
      <div className='second-sign-up-container'>
        <form className="sign-up" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          {confirmationMessage && <p className="confirmation-message" >{confirmationMessage}</p>} 
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
