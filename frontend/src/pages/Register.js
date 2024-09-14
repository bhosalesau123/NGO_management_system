
// // src/components/RegisterForm.js
// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/Register.css";

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     lastname: "",
//     email: "",
//     phone: "",
//     password: "",
//     role:""
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", formData.name);
//     formData.append("lastname", formData.lastname);
//     formData.append("email", formData.email);
//     formData.append("phone", formData.phone);
//     formData.append("password", formData.password);
//     formData.append("role", formData.role);
   

//     try {
//       const response = await axios.post("http://localhost:8080/api/v1/user/register", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       });
//       console.log(response.data);
//       setMessage("User registered successfully!");

//       // Clear the form
//       setFormData({
//         name: "",
//         lastname: "",
//         email: "",
//         phone: "",
//         password: "",
//         role:""
//       });
//     } catch (error) {
//       console.error(error);
//       setMessage("Failed to register user.");
//     }


//   return (
//     <div className="register-form">
//     <div className="form-container">
//       <h2>Register</h2>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Last Name</label>
//           <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Role</label>
//           <input type="text" name="role" value={formData.role} onChange={handleChange} required />
//         </div>
        
//         <button type="submit">Register</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default RegisterForm;


// src/components/RegisterForm.js
// src/components/RegisterForm.js
import React, { useState } from "react";
import axios from "axios";
import "../styles/Register.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    role: ""
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/v1/user/register", formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response.data);
      setMessage("User registered successfully!");

      // Clear the form after successful submission
      setFormData({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        role: ""
      });
    } catch (error) {
      console.error(error);
      setMessage("Failed to register user.");
    }
  };

  return (
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
            <label>Last Name</label>
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input type="text" name="role" value={formData.role} onChange={handleChange} required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
