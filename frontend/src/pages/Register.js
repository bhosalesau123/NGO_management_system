import React from 'react'
import { useState } from 'react';
const Register = () => {
     // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // State to handle errors
  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
   
      };
  
  // Validate form data
  const validate = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Name is required.';
    if (!data.email) errors.email = 'Email is required.';
    if (!data.password) errors.password = 'Password is required.';
    return errors;
};
  return (
    <div className='login'>
        <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
      
    </div>
  )
}

export default Register
