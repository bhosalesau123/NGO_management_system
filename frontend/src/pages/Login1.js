import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Login.css"
import { Link } from 'react-router-dom';
import "../styles/Login.css"

const LoginForm = () => {
  // State for storing form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // To track loading state

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!email || !password) {
      setError('Please fill out both fields.');
      return;
    }

    // Clear previous errors
    setError('');
    setLoading(true); // Start loading

    try {
      // Send a POST request to your backend server
      const response = await axios.post('http://localhost:8080/api/v1/user/login', {
        email,
        password,
      });

      // Handle the successful response here
      console.log('Login successful:', response.data);

      // Reset form fields after a successful submission
      setEmail('');
      setPassword('');
    } catch (err) {
      // Handle errors here
      if (err.response && err.response.data) {
        // Show error from server response
        setError(err.response.data.message || 'Login failed. Please try again.');
      } else {
        // General error message
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false); // Stop loading after response
    }
  };
return(
  <div className='login-form'>
    <div className='Login'>
      <h2>Login</h2>
      {/* Display error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Disable the button if loading */}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form><br/>
<div>
    <div style ={{alignContent:"center"}}>dont have an account<hr/><Link to ="/register" style={{color:"blue"}}>create account</Link></div>
    <Link to ="/ngo-register" style={{color:"blue"}}>create ngo account</Link>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;
