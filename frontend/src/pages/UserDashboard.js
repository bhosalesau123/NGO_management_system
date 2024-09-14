
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/UserProfile.css'; // Add the styles for the sidebar
import Ngo from "../components/Ngocard"
import Footer from "../components/Footer1"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state
  const [profile, setProfile] = useState({
    name: 'Sauarbh',
    lastname: 'Bhosale',
    email: 'saubhosale@gmail.com',
    phone: "7498216958"
  }); // State to store user profile

  // Toggle function to open/close the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Fetch user data from backend (GET request)
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/user//UserProfile')
      .then((response) => {
        setProfile(response.data); // Set user profile data from response
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
      });
  }, []);

  return (
    <div>
         <h1>User Dashboard</h1>
      <Header/>
      <Ngo/>
      <Footer/>
      {/* Toggle button */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />} {/* Show 'X' when sidebar is open, and 'bars' when it's closed */}
      </div>

      {/* Sidebar content */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>User Profile</h2>
        </div>

        {/* Displaying user profile information */}
        <div className="profile-details">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Last Name:</strong> {profile.lastname}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
        </div>

        {/* Button to redirect to update profile page */}
        <button className="update-profile-btn" onClick={() => window.location.href = '/update-profile'}>
          Update Profile
        </button>
      </div><br/><br/>
    </div>
  );
};

export default Sidebar;
