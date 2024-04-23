import React, { useState } from 'react';
import img from '../assets/Background image.svg'; 
import arrowButton from '../assets/arrow-right.svg'; // Importing the arrow icon
import './product-categories.css';

const ProductCategories = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  const categories = [
    { name: 'All', image: img },
    { name: 'Crops', image: img },
    { name: 'Meat', image: img },
    { name: 'Fishes', image: img },
    { name: 'Tools & Equips.', image: img },
    { name: 'Services', image: img },
  ];

  const handleClick = (index) => {
    setCurrentCategory(index);
  };

  return (
    <div className='categories-container'>
      <h2 className='categories-title'>{categories[currentCategory].name}</h2>
      <div className='categories-wrapper'>
        {categories.map((category, index) => (
          <div key={index} className={`categories ${index === currentCategory ? 'active' : ''}`}>
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
            <button onClick={() => handleClick(index)}>
              <img src={arrowButton} alt="Arrow" style={{ width: '16px', height: '16px' }} /> {/* Arrow icon inside the button */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
