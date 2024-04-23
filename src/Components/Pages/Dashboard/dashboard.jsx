import DashboardFigure from '../../Dashboard-Figure/dashboard-figure';
import DashboardOverview from '../../DashboardOverview/dashboard-overview';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-wrapper'>
        <p className='dashboard-title'>Dashboard</p>
        <p className='dashboard-date'>Sunday, 24th April, 2024</p>

        <div className='dashboard-user-container'>
          <div className='dashboard-user-wrapper'>
            <h1 className='dashboard-user'>Hello, Tolu!</h1>
            <p className='dashboard-user-title'>Explore market insights, manage your listings, and stay connected with Agriswift.</p>
          </div>
        </div>
        <p className='overview-text'>Overview</p>
        <DashboardOverview/>
        <DashboardFigure/>
      </div>
    </div>
  );
}

export default Dashboard;
