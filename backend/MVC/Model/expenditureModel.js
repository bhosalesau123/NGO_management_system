// models/Expenditure.js

const mongoose = require('mongoose');

const expenditureSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
});

const Expenditure = mongoose.model('Expenditure', expenditureSchema);

 export default Expenditure ;
