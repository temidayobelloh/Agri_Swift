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
      <div className='dashboard-figure-three'><p>Scheduled Deliveries</p>
      <img alt='scheduled-delivery-icon'/>
      </div>
    </div>
  )
}

export default DashboardFigure;
