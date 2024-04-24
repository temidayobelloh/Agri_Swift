import { BrowserRouter as Router, Route, NavLink, Routes, Redirect } from 'react-router-dom';
import SignInPage from './Components/Pages/SignIn/sign-in';
import Dashboard from './Components/Pages/Dashboard/dashboard';
import ProductListing from './Components/Pages/Product_Listing/product-listing';
import CropManagement from './Components/Pages/CropManagement/crop-management';
import Messages from './Components/Pages/Messages/messages';
import Settings from './Components/Pages/Settings/settings';
import Notifications from './Components/Pages/Notification/notification';
import DashboardFooter from './Components/Dashboard-Footer/dashboard-footer';
import './App.css';
import SignUp from './Components/Pages/SignUp/sign-up';
import WorkDetails from './Components/Pages/WorkDetails/work-details';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <h2 className='logo'>Agri Swift</h2>
          <ul>
            <li>
              <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
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
        </div>
        <div className="content">
          <Routes>
            <Route path="/Agri_Swift" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product-listings" element={<ProductListing />} />
            <Route path="/crop-management" element={<CropManagement />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/signin" element={<SignInPage />} /> 
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/work-details" element={<WorkDetails/>}/>
          </Routes>
        </div>
      </div>
      <DashboardFooter />
    </Router>
  );
};

export default App;
