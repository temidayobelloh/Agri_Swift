import './dashboard-footer.css';
import { Link } from 'react-router-dom';

const DashboardFooter = () => {
  return (
    <div>
    <div className='dashboard-footer-container'>
    <ul>
            <li>
              <Link to="/help-center">Help Center</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>

          </ul>
    <button className='log-out-button'> Log Out</button>
    </div>
    </div>
  )
}

export default DashboardFooter;
