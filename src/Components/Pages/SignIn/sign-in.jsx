import { useState } from 'react';
import './sign-in.css';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform your sign-in logic
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <div className="sign-in-page">
      <div className="left-section">
        <h2>Logo</h2>
        <h3>Call to action</h3>
      </div>
      <div className="right-section">
        <div className="sign-in-form">
            <p className='sign-in-text'>Sign In </p>
            <label className='label-email'>Email</label>
          <input type="email" placeholder="E.g Johncampion@email.com " value={email} onChange={handleEmailChange} />
          <label className='label-password'>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <button className="sign-in-button" onClick={handleSubmit}>Sign in</button>
          <p className='alternative-sign-in'>Or</p>
          <button className="sign-in-with-google-button">Sign in with Google</button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;