import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './home-page.css';
import SignUp from '../SignUp/sign-up';
import SignInPage from '../SignIn/sign-in';
import logo from '../../assets/agriculture-logo.svg';

const HomePage = () => {
  return (
    <div className="custom-home-page-container">
      <h1 className="agri-swift-title">Welcome to AgriSwift! <img src={logo} alt ='agri-logo' className='logo-icon'/> </h1>
      <p className="agri-swift-intro">Your one-stop solution for agricultural management.</p>
      <div className="agri-button-container">
        <Link to="/signin" className="button">Sign In</Link>
        <Link to="/signup" className="button">Sign Up</Link>
      </div>
      <Routes>
        <Route path="/signup" element= {<SignUp/>}/>
        <Route path="/signin" element= {<SignInPage/>}/>
      </Routes>
    </div>
  );
};

export default HomePage;
