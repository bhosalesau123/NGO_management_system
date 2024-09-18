// src/components/RegisterForm.js
import React, { useState } from "react";
import axios from "axios";
import "../styles/Ngoregister.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    regNumber: "",
    email: "",
    password: "",
    address: "",
    description: "",
    website: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
       const response = await axios.post("http://localhost:8080/api/v1/ngo/ngo-register", formData, {
         headers: {
           "Content-Type": "application/json"
         }
       });
       console.log(response.data);
       setMessage("User registered successfully!");
 
       // Clear the form
       setFormData({
         name: "",
         regNumber: "",
         email: "",
         password: "",
         address: "",
         description: "",
         website: "",
       });
    } catch (error) {
       console.error(error);
       setMessage("Failed to register user.");
    }
 };
 
  return (<>
    <div className="register-form">
    <div className="form-container">
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Registration number</label>
          <input type="text" name="regNumber" value={formData.regNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input type="text" name="website" value={formData.website} onChange={handleChange} required />
        </div>
       
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
   
    </>
  );
};

export default RegisterForm;
