import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import SignInPage from '../SignIn/sign-in';
import Dashboard from '../Dashboard/dashboard';
import ProductListing from '../Product_Listing/product-listing';
import CropManagement from '../CropManagement/crop-management';
import Messages from '../Messages/messages';
import Settings from '../Settings/settings';
import './user-dashboard.css';
import SignUp from '../SignUp/sign-up';
import logo from '../../assets/agriculture-logo.svg';
import HomePage from '../HomePage/home-page';

const UserDashboard = () => {
  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <h2 className='logo'>Agri Swift <img src={logo} alt ='agri-logo' className='logo-icon'/></h2>
          <ul>
          <li>
              <NavLink to="/home" activeClassName="active"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" activeClassName="active"> Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/product-listings" activeClassName="active">Product Listings</NavLink>
            </li>
            <li>
              <NavLink to="/crop-management" activeClassName="active"> Order Mgmt</NavLink>
            </li>
            <li>
              <NavLink to="/messages" activeClassName="active">Messages</NavLink>
            </li>
            <li>
              <NavLink to="/settings" activeClassName="active">Settings</NavLink>
            </li>
          </ul>
          <div className='dashboard-footer-container'>
            <ul>
              <li>
                <NavLink to="/help-center">Help Center</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              </li>
            </ul>
            <NavLink to="/home"> 
              <button className='log-out-button'>Log Out</button>
            </NavLink>
          </div>
        </div>
        <div className="content">
          <Routes>
            <Route path="/Agri_Swift" element={<HomePage/>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product-listings" element={<ProductListing />} />
            <Route path="/crop-management" element={<CropManagement />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/signin" element={<SignInPage />} /> 
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default UserDashboard;
