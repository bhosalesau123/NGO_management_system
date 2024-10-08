
import mongoose from 'mongoose';

const ngoSchema = new mongoose.Schema({
  image: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  regNumber: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
 
  website: {
    type: String,
    trim: true
  },
  isApproved: {
    type: Boolean,
    default: false, },// Default is false until admin approves it

  
}, { timestamps: true });

const NGO = mongoose.model('NGO', ngoSchema);
export default NGO;
