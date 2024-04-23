import React, { useState, useEffect } from 'react';
import DashboardFigure from '../../Dashboard-Figure/dashboard-figure';
import DashboardOverview from '../../DashboardOverview/dashboard-overview';
import womanHarvesting from '../../assets/Young woman harvesting.svg';
import './dashboard.css';

const Dashboard = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='dashboard-container'>
      <div className='dashboard-wrapper'>
        <p className='dashboard-title'>Dashboard</p>
        <p className='dashboard-date'>{currentDateTime.toLocaleString()}</p> {/* Display current date and time */}
        <div className='dashboard-user-container'>
          <div className='dashboard-user-wrapper'>
            <img src={womanHarvesting} alt="Woman Harvesting" className="dashboard-user-image" />
            <div>
              <h1 className='dashboard-user'>Hello, Tolu!</h1>
              <p className='dashboard-user-title'>Explore market insights, manage your listings, and stay <br></br>connected with Agriswift.</p>
            </div>
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
