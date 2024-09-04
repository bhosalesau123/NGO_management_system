import mongoose from 'mongoose';

const ngoSchema = new mongoose.Schema({
 
  orgName: {
    type: String,
    required: true,
    trim: true
  },
  regNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
 
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    
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
    trim: true,
  }
   
}, { timestamps: true }); 

const NGO = mongoose.model('NGO', ngoSchema);
export default NGO;