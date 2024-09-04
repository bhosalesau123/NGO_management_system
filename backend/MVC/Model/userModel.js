// models/User.js
import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin',"ngo"], default: 'user' } // Define roles
},
{ timestamps: true });


const User = mongoose.model('User', userSchema);
export default User;
