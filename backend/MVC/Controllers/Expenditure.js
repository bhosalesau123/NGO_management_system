import Expenditure from "../Model/expenditureModel"
// Create new expenditure
exports.createExpenditure = async (req, res) => {
    const { date, amount, description } = req.body;
  
    const newExpenditure = new Expenditure({
      date,
      amount,
      description
    });
  
    try {
      const savedExpenditure = await newExpenditure.save();
      res.status(201).json(savedExpenditure);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

  // Get all expenditures
  exports.getAllExpenditures = async (req, res) => {
    try {
      const expenditures = await Expenditure.find();
      res.json(expenditures);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
// Update  expenditure
exports.updateExpenditure = async (req, res) => {
  const { id } = req.params;
  const { date, amount,  description } = req.body;

  try {
    const updatedExpenditure = await Expenditure.findByIdAndUpdate(
      id,
      { date, amount, description },
      { new: true }
    );
    res.json(updatedExpenditure);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an expenditure
exports.deleteExpenditure = async (req, res) => {
  const { id } = req.params;

  try {
    await Expenditure.findByIdAndDelete(id);
    res.json({ message: 'Expenditure deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
