
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Expenditure.css'; // Import the CSS file

const ExpenditureForm = () => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [expenditures, setExpenditures] = useState([]);

  useEffect(() => {
    axios.get('')
      .then(response => setExpenditures(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('', { date, amount,  description })
      .then(response => {
        setExpenditures([...expenditures, response.data]);
        setDate('');
        setAmount('');
        setDescription('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </label>
        {/* <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </label> */}
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Add Expenditure</button>
      </form>

      <h2>Expenditures List</h2>
      <ul>
        {expenditures.map(exp => (
          <li key={exp._id}>
            {exp.date} - {exp.amount} - {exp.category} - {exp.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenditureForm;
