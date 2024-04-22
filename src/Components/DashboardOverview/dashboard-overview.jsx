import './dashboard-overview.css';

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview-container">
      <div className="dashboard-overview-component">
        <img alt= "products-sold" />
        <p>2,567</p>
        <p>Product Sold</p>
      </div>
      <div className="dashboard-overview-component">
        <img alt= "happy-customer" />
        <p>2,567</p>
        <p>Product Sold</p>
      </div>
      <div className="dashboard-overview-component">
        <img alt= "ranked-farmer" />
        <p>2,567</p>
        <p>Product Sold</p>
      </div>
      <div className="dashboard-overview-component">
        <img alt= "increased-listing" />
        <p>2,567</p>
        <p>Product Sold</p>
      </div>
    </div>
  );
}

export default DashboardOverview;
