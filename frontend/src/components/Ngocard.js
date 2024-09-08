
// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
// import '../styles/Ngo.css';  // Importing the CSS for the carousel

// const Ngocard = () => {
//   const [ngoData, setNgoData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Ref for the scroll container
//   const carouselRef = useRef(null);

//   // Function to fetch the NGO data
//   const fetchNgoData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/v1/ngo/Ngo");
//       setNgoData(response.data);  // Assuming the response is an array of NGO details
//       setLoading(false);
//     } catch (err) {
//       setError('Failed to fetch NGO details');   
//       setLoading(false);
//     }
//   };

//   // useEffect to fetch the data when the component mounts
//   useEffect(() => {
//     fetchNgoData();
//   }, []);

//   // Scroll functions
//   const scrollLeft = () => {
//     carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//   };

//   const scrollRight = () => {
//     carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//   };

//   return (
//     <div className="ngo-container">
//       <h1>NGO Management System</h1>

//       {loading ? (
//         <p>Loading NGO details...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <div className="carousel-wrapper">
//           <button className="scroll-button left" onClick={scrollLeft}>❮</button>

//           <div className="ngo-card-carousel" ref={carouselRef}>
//             {ngoData.map((ngo) => (
//               <div className="ngo-card" key={ngo.id}>
//                 <img src={ngo.image} alt={ngo.name} className="ngo-image" />
//                 <div className="ngo-card-content">
//                   <h2>{ngo.name}</h2>
//                   <p>{ngo.description}</p>
//                   <p><strong>Contact:</strong> {ngo.email}</p>
//                   <p><strong>Phone:</strong> {ngo.phone}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button className="scroll-button right" onClick={scrollRight}>❯</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Ngocard;




// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
// import '../styles/Ngo.css';  // Importing the CSS for the carousel

// const Ngocard = () => {
//   const [ngoData, setNgoData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Ref for the scroll container
//   const carouselRef = useRef(null);

//   // Function to fetch the NGO data
//   const fetchNgoData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/v1/ngo/Ngo");
//       setNgoData(response.data.getngo);
//       console.log(response.data)
//         // Assuming the response is an array of NGO details
//       setLoading(false);
//     } catch (err) {
//       setError('Failed to fetch NGO details');   
//       setLoading(false);
//     }
//   };

//   // useEffect to fetch the data when the component mounts
//   useEffect(() => {
//     fetchNgoData();
//   }, []);

//   // Scroll functions
//   const scrollLeft = () => {
//     const cardWidth = carouselRef.current.querySelector('.ngo-card').clientWidth;
//     carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
//   };

//   const scrollRight = () => {
//     const cardWidth = carouselRef.current.querySelector('.ngo-card').clientWidth;
//     carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
//   };

//   return (
//     <div className="ngo-container">
//       <h1>NGO Management System</h1>

//       {loading ? (
//         <p>Loading NGO details...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : ngoData.length === 0 ? (
//         <p>No NGOs available</p>
//       ) : (
//         <div className="carousel-wrapper">
//           <button className="scroll-button left" onClick={scrollLeft}>❮</button>

//           <div className="ngo-card-carousel" ref={carouselRef}>
//             {ngoData.map((ngo) => (
//               <div className="ngo-card" key={ngo._id}>
//                 <img 
//                   src={ngo.image ? `http://localhost:8080/${ngo.image}` : '/default-image.png'} 
//                   alt={ngo.name} 
//                   className="ngo-image" 
//                 />
//                 <div className="ngo-card-content">
//                   <h2>{ngo.name}</h2>
//                   <p>{ngo.description}</p>
//                   <p><strong>Contact:</strong> {ngo.email}</p>
//                   <p><strong>Phone:</strong> {ngo.phone}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button className="scroll-button right" onClick={scrollRight}>❯</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Ngocard;

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
      const response = await axios.get("http://localhost:8080/api/v1/ngo/Ngo");
      setNgoData(response.data.getngo);  // Assuming the response contains the "getngo" array
      console.log(response.data);        // Logging to debug data structure
      setLoading(false);
    } catch (err) {
      console.error(err);               // Log the error for debugging
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
    const cardWidth = carouselRef.current.querySelector('.ngo-card').clientWidth;
    carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const cardWidth = carouselRef.current.querySelector('.ngo-card').clientWidth;
    carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="ngo-container">
      <h1>NGO Management System</h1>

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
                <img 
                  src={ngo.image ? `http://localhost:8080/uploads/${ngo.image}` : '/default-image.png'} 
                  alt={ngo.name} 
                  className="ngo-image" 
                />
                <div className="ngo-card-content">
                  <h2>{ngo.name}</h2>
                  <p>{ngo.description}</p>
                  <p><strong>Contact:</strong> {ngo.email}</p>
                  <p><strong>Phone:</strong> {ngo.phone}</p>
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
