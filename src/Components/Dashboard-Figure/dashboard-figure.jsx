import './dashboard-figure.css';

const DashboardFigure = () => {
  return (
    <div className='dashboard-figure-wrapper'>
      <div className='dashboard-figure-one'>
        <p className='dashboard-figure-title'>Product <br /> Demand & Supply</p>
        <div className='dashboard-figure-two'>
          <img alt="statistics" />
        </div>
      </div>
      <div>
      <p className='fig-three-title'>Scheduled Deliveries</p>
      <div className='dashboard-figure-three'>
      </div></div>
      <div className='fig-four-and-five-wrapper'>
      <div className='dashboard-figure-four'><p>Weekly weather</p>
      </div>
      <div className='dashboard-figure-five'>Weekly orders statistics here</div>
      </div>
      
    </div>
  )
}

export default DashboardFigure;
