// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import NgoDash from "../pages/NgoDash"
// import "../styles/Ngo-Login.css"
// import User from "./UserDashboard"
// // import Admin from "./AdDash"


// const LoginForm = () => {
//   // State for storing form inputs
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false); // To track loading state
//   const navigate = useNavigate(); 
//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation for empty fields
//     if (!email || !password) {
//       setError('Please fill out both fields.');
//       return;
//     }

//     // Clear previous errors
//     setError('');
//     setLoading(true); // Start loading

//     try {
//       // Send a POST request to your backend server
//       const response = await axios.post('http://localhost:8080/api/v1/ngo/login', {
//         email,
//         password,
//       });

//       // Handle the successful response here
//       console.log('Login successful:', response.data);
//       console.log(response.data.user.role)
     
//       // Reset form fields after a successful submission
//       setEmail('');
//       setPassword('');
      
//         if (response.data) {
//           navigate('/NgoDash'); // Redirect to user dashboard route
//         } 

//     } catch (err) {
//       // Handle errors here
//       if (err.response && err.response.data) {
//         // Show error from server response
//         setError(err.response.data.message || 'Login failed. Please try again.');}
//        else {
//         // General error message
//         setError('Something went wrong. Please try again.');
//       }
        
//     } finally {
//       setLoading(false); // Stop loading after response
//     }
//   };
// return(
//   <div className='login-form'>
//     <div className='Login'>
//       <h2>Login</h2>
//       {/* Display error message */}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <form onSubmit={handleSubmit }>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         {/* Disable the button if loading */}
//         <button type="submit" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form><br/>
// <div>
//     <div style ={{alignContent:"center"}}>dont have an account<hr/><Link to ="/ngo-register" style={{color:"blue"}}>create account</Link></div>
  
//     </div>
//     </div>
//     </div>
//   );
// };

// export default LoginForm;



import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Login.css"
import { Link, useNavigate } from 'react-router-dom';
import NgoDash from "../pages/NgoDash"
import "../styles/Login.css"
import User from "./UserDashboard"
// import Admin from "./AdDash"


const LoginForm = () => {
  // State for storing form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // To track loading state
  const navigate = useNavigate(); 
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
      const response = await axios.post(' http://localhost:8080/api/v1/ngo/login', {
        email,
        password
      });

      // Handle the successful response here
      console.log('Login successful:', response.data);
     
      // Reset form fields after a successful submission
      setEmail('');
      setPassword('');
      // const { token, user } = response.data;
      // localStorage.setItem('token', token); // Save the token

      // // Determine redirect path based on user role
      // if (user.role==="user") {
      //   history.push(<User/>); // Redirect to admin dashboard
      // } else {
      //   history.push('/user'); // Redirect to user dashboard
      // }
        if (response.data.ngo.isApproved== true) { 
           
          navigate('/NgoDash'); // Redirect to user dashboard route
        } 

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

      <form onSubmit={handleSubmit }>
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
    <div style ={{alignContent:"center"}}>dont have an account<hr/><Link to ="/ngo-register" style={{color:"blue"}}>create account</Link></div>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;
