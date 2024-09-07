
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import '../styles/Ngo.css';  // Importing the CSS for the carousel

const Ngocard = () => {
  const [ngoData, setNgoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Ref for the scroll container
  const carouselRef = useRef(null);

  // Function to fetch the NGO data
  const fetchNgoData = async () => {
    try {
      const response = await axios.get('https://your-backend-api-url.com/api/ngos');
      setNgoData(response.data);  // Assuming the response is an array of NGO details
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch NGO details');
      setLoading(false);
    }
  };

  // useEffect to fetch the data when the component mounts
  useEffect(() => {
    fetchNgoData();
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="ngo-container">
      <h1>NGO Management System</h1>

      {loading ? (
        <p>Loading NGO details...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="carousel-wrapper">
          <button className="scroll-button left" onClick={scrollLeft}>❮</button>

          <div className="ngo-card-carousel" ref={carouselRef}>
            {ngoData.map((ngo) => (
              <div className="ngo-card" key={ngo.id}>
                <img src={ngo.imageUrl} alt={ngo.name} className="ngo-image" />
                <div className="ngo-card-content">
                  <h2>{ngo.name}</h2>
                  <p>{ngo.description}</p>
                  <p><strong>Contact:</strong> {ngo.contactEmail}</p>
                  <p><strong>Phone:</strong> {ngo.contactPhone}</p>
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
