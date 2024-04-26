import React from 'react';
import { Link } from 'react-router-dom';
import './sign-in.css';

const SignInPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary tasks, such as form validation or authentication
  };

  return (
    <div className="sign-in-page">
      <div>
        <p className='sign-in-text'>Sign In</p>
        <form onSubmit={handleSubmit}>
          <label className='label-email'>Fullname</label>
          <input type="text" placeholder="Enter your fullname" />
          <label className='label-password'>Password</label>
          <input type="password" placeholder="Enter your password" />
          <Link to="/dashboard">
            <button type="submit" className="sign-in-button">Sign in</button>
          </Link>
        </form>
        <p className='alternative-sign-in'>Or</p>
        <button className="sign-in-with-google-button">Sign in with Google</button>
        <p className='prompt'>Don't have an Account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default SignInPage;
