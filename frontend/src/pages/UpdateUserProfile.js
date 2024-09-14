import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/UpdateUserProfile.css"

const UpdateProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
  });
  const navigate = useNavigate();

  // Fetch the user's existing profile data to pre-fill the form
  useEffect(() => {
    axios.get('/api/user/profile') // Fetch the user profile to prefill the form
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle form submission to update profile
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(' http://localhost:8080/api/v1/user/update-profile', profile) // Update profile
      .then(response => {
        alert("Profile updated successfully!");
        navigate('/user-dash'); // Redirect to dashboard after success
      })
      .catch(error => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div className="update-profile">
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={profile.lastname}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
