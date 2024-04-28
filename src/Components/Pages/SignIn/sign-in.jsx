import React, { useState }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sign-in.css';
import axios from 'axios';

const SignInPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const url = 'https://agriswift-backend.onrender.com/auth/login';
     
      const userData = {
        email: formData.email,
        password: formData.password
      };

      const response = await axios.post(url, userData);
      console.log('Login successful:', response.data);
      sessionStorage.setItem('token', response.data.token);
      // sessionStorage.setItem('firstName', response.data.result.fullame);
      // sessionStorage.setItem('id', response.data.result.userId);
      //setUser({id: response.data.result.userid, firstName: response.data.result.firstName})
      navigate("/dashboard");

    } catch (error) {
      console.error('Error occurred:', error.response.data);
      alert('Sign in failed. Please try again.');
    }
    
  };

  return (
    <div className="sign-in-page">
      <div>
        <p className='sign-in-text'>Sign In</p>
        <form onSubmit={handleSubmit}>
          <label className='label-email'>Email</label>
          <input type="email"  name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
          <label className='label-password'>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
          <button type="submit" className="sign-in-button">Sign in</button>
        </form>
        <p className='alternative-sign-in'>Or</p>
        <button className="sign-in-with-google-button">Sign in with Google</button>
        <p className='prompt'>Don't have an Account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default SignInPage;
