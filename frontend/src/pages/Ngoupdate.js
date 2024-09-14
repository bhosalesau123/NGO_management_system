import React, { useState } from "react";
import axios from "axios";
import "../styles/Ngoupdate.css";
import { useParams } from "react-router-dom";

const RegisterForm = () => {
    const { id } = useParams(); // Get 'id' from the URL parameters

  const [formData, setFormData] = useState({
    name: "",
    regNumber: "",
    email: "",
    password: "",
    address: "",
    description: "",
    website: ""
  });

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    formDataWithImage.append("name", formData.name);
    formDataWithImage.append("regNumber", formData.regNumber);
    formDataWithImage.append("email", formData.email);
    formDataWithImage.append("password", formData.password);

    formDataWithImage.append("address", formData.address);
    formDataWithImage.append("description", formData.description);
    formDataWithImage.append("website", formData.website);

    if (image) {
      formDataWithImage.append("image", image);
    }

    try {
        
      const response = await axios.patch(`http://localhost:8080/api/v1/ngo/update/${id}` , formDataWithImage, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(response.data);
      setMessage("Ngo update successfully!");

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
      setImage(null);
    } catch (error) {
      console.error(error);
      setMessage("Failed to update ngo.");
    }
  };

  return (
    <div className="ngo-update">
    <div className="form-container">
      <h2>Update</h2>
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
        <div className="form-group">
          <label>Profile Image</label>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
    </div>
  );
};

export default RegisterForm;
