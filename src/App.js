
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/dashboard';
import ProductListing from './Components/Product_Listing/product-listing';
import CropManagement from './Components/CropManagement/crop-management';
import Messages from './Components/Messages/messages';
import Settings from './Components/Settings/settings';
import Notifications from './Components/Notification/notification';
import DashboardFooter from './Components/Dashboard-Footer/dashboard-footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div className="sidebar">
          <h2 className='logo'>Logo</h2>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/product-listings">Product Listings</Link>
            </li>
            <li>
              <Link to="/crop-management">Crop Management</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
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
      <div>
      <DashboardFooter/>
      </div>
    </Router>
  );
};

export default App;
