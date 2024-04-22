import DashboardFigure from '../Dashboard-Figure/dashboard-figure';
import DashboardOverview from '../DashboardOverview/dashboard-overview';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <p className='dashboard-title'>Dashboard</p>
      <p className='dashboard-date'>Sunday, 24th April, 2034</p>

      <div className='dashboard-user-container'>
        <div className='dashboard-user-wrapper'>
          <h1 className='dashboard-user'>Hello, Tolu!</h1>
          <p className='dashboard-user-title'>Explore market insights, manage your listings, and stay connected with Agriswift.</p>
        </div>
      </div>
      <p>Overview</p>
      <DashboardOverview/>
      <DashboardFigure/>
    </div>
  );
}

export default Dashboard;
