


// 

import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import
import axios from 'axios';
import '../styles/Ngo.css';  

const Ngocard = () => {
  const [ngoData, setNgoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Correct usage of useNavigate
  const carouselRef = useRef(null);

  const fetchNgoData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/ngo/Ngo");
      setNgoData(response.data.getngo);  // Assuming the response contains the "getngo" array
      console.log(response.data);        
      setLoading(false);
    } catch (err) {
      console.error(err);               
      setError('Failed to fetch NGO details');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNgoData();
  }, []);

  const handleDonateClick = () => {
    navigate("/login"); // Navigate to the payment page
  };

  // Scroll functions
  const scrollLeft = () => {
    const cardWidth = carouselRef.current.querySelector('.ngo-card').clientWidth;
    carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const cardWidth = carouselRef.current.querySelector('.ngo-card').clientWidth;
    carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="ngo-container">
      <h1 style={{ textAlign: "center" }}>NGO</h1>

      {loading ? (
        <p>Loading NGO details...</p>
      ) : error ? (
        <p>{error}</p>
      ) : ngoData.length === 0 ? (
        <p>No NGOs available</p>
      ) : (
        <div className="carousel-wrapper">
          <button className="scroll-button left" onClick={scrollLeft}>❮</button>

          <div className="ngo-card-carousel" ref={carouselRef}>
            {ngoData.map((ngo) => (
              <div className="ngo-card" key={ngo._id}>
                <div className="ngo-card-content">
                  <h2>{ngo.name}</h2>
                  <p>{ngo.description}</p>
                  <p><strong>Contact:</strong> {ngo.email}</p>
                </div>
                <div>
                  <button type="button" onClick={handleDonateClick}>Donate</button> {/* Fixed button type */}
                </div>
              </div>
            ))}
          </div>

          <button className="scroll-button right" onClick={scrollRight}>❯</button>
        </div>
      )}
    </div>
  );
};

export default Ngocard;
