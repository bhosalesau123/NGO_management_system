// models/User.js
import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  image: {
    type: Buffer,
    contentType:String,
    required: false
  },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' } // Define roles
},
{ timestamps: true });


const User = mongoose.model('User', userSchema);
export default User;
