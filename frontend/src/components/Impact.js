import React from 'react';
import '../styles/Impact.css';
import children from "../assets/children.jpg"
import Meal from "../assets/Meal.jpg"
import Homes from "../assets/Homes.jpg"
import poor from "../assets/poor.jpg"




// Impact data (can be passed as props or fetched from API)
const impactData = [
  {
    imageUrl: children ,
    number: '1000+',
    description: 'Children Educated',
  },
  {
    imageUrl: Meal,
    number: '5000+',
    description: 'Meals Served',
  },
  {
    imageUrl: Homes,
    number: '300',
    description: 'Homes Built',
  },
  {
    imageUrl: poor,
    number: '100',
    description: 'Communities Helped',
  },
];

const ImpactInNumbers = () => {
  return (
    <section className="impact-section">
      <h2 className="impact-title">Our Impact in Numbers</h2>
      <div className="impact-grid">
        {impactData.map((item, index) => (
          <div key={index} className="impact-item">
            <div className="impact-image-wrapper">
              <img src={item.imageUrl} alt={item.description} className="impact-image" />
            </div>
            <h3 className="impact-number">{item.number}</h3>
            <p className="impact-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactInNumbers;
