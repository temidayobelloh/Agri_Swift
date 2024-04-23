import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard/dashboard';
import ProductListing from './Components/Pages/Product_Listing/product-listing';
import CropManagement from './Components/Pages/CropManagement/crop-management';
import Messages from './Components/Pages/Messages/messages';
import Settings from './Components/Pages/Settings/settings';
import Notifications from './Components/Pages/Notification/notification';
import DashboardFooter from './Components/Dashboard-Footer/dashboard-footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <h2 className='logo'>Logo</h2>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/product-listings" activeClassName="active">Product Listings</NavLink>
            </li>
            <li>
              <NavLink to="/crop-management" activeClassName="active">Crop Management</NavLink>
            </li>
            <li>
              <NavLink to="/messages" activeClassName="active">Messages</NavLink>
            </li>
            <li>
              <NavLink to="/notifications" activeClassName="active">Notifications</NavLink>
            </li>
            <li>
              <NavLink to="/settings" activeClassName="active">Settings</NavLink>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product-listings" element={<ProductListing />} />
            <Route path="/crop-management" element={<CropManagement />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
      <DashboardFooter />
    </Router>
  );
};

export default App;
