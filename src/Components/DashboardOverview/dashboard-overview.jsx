import React from 'react';
import './dashboard-overview.css';
import bagHappyImage from '../../Components/assets/bag-happy.svg';
import frame1Image from '../../Components/assets/frame1.svg';
import frame2Image from '../../Components/assets/frame2.svg';
import frame3Image from '../../Components/assets/frame 3.svg';

const DashboardOverview = () => {
  const initialItems = [
    { alt: "Products Sold", value: "2,567", image: bagHappyImage },
    { alt: "Happy  Customer", value: "165", image: frame1Image },
    { alt: "Ranked Farmer", value: "20th", image: frame2Image },
    { alt: "Increased Listing", value: "34%", image: frame3Image }
  ];

  return (
    <div className="dashboard-overview-container">
      {initialItems.map((item, index) => (
        <div className="dashboard-overview-component" key={index}>
          <img src={item.image} alt="" />
          <p className="value">{item.value}</p> {/* Use "value" class name for item.value */}
          <div className="alt">{item.alt}</div> {/* Place item.value on top of item.alt */}
        </div>
      ))}
    </div>
  );
}

export default DashboardOverview;
