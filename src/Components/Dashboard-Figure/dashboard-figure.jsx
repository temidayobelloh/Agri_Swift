import React from 'react';
import './dashboard-figure.css';
import chart from '../../Components/assets/Chart.svg';
import grid from '../../Components/assets/Grid.svg';
import stats from '../../Components/assets/statistics.svg';

const DashboardFigure = () => {
  // Function to get the current date and format it as "Day, Month Date, Year"
  const getCurrentDate = () => {
    const currentDate = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    return `${day}, ${month} ${date}, ${year}`;
  };

  return (
    <div className='dashboard-figure-wrapper'>
      <div className='dashboard-figure-one'>
        <p className='dashboard-figure-title'>Product <br /> Demand & Supply</p>
        <div className='dashboard-figure-two'>
          <img className='chart-image' src={chart} alt='chart'/>
        </div>
      </div>
      <div>
        <p className='fig-three-title'>Scheduled Deliveries</p>
        <div className='dashboard-figure-three'>
          <p className='current-date'>{getCurrentDate()}</p>
          <img src={grid} alt='calendar' className='calendar-image'/>
        </div>
      </div>
      <div className='fig-four-and-five-wrapper'>
        <div className='dashboard-figure-four'>
          <p>Current Weather</p>
          {/* Weather functionality removed */}
        </div>
        <div className='dashboard-figure-five'>
          Weekly Orders 
          <p className='figure-five-title'>24</p>
          <img src={stats} alt='statistics' className='statistics-image'/>
        </div>
      </div>
    </div>
  );
};

export default DashboardFigure;
