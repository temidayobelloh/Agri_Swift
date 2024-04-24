import { Link, useNavigate } from 'react-router-dom';

const DashboardFooter = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here
    // Redirect to the sign-in component
    navigate('/signin');
  };

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
        <button className='log-out-button' onClick={handleLogout}> Log Out</button>
      </div>
    </div>
  );
}

export default DashboardFooter;
