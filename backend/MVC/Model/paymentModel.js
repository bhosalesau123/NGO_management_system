import mongoose from 'mongoose';

// Define the user schema
const paymentSchema = new mongoose.Schema({
  username: { type: String, required: false },
  ngoname: { type: String, required: false },
  
  amount: { type: String, required: false },
},
{ timestamps: true });

const Pay = mongoose.model('Payment', paymentSchema);
export default Pay;