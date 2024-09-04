import React from 'react';
import { useState } from 'react';
const LoginForm = () => {
  // State for storing form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle  submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill out both fields.');
      return;
    }

    // Clear  previous errors
    setError('');


    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
