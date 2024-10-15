import React, { useState } from 'react';
import './WeightInput.css'; // New CSS file for styling

function WeightInput({ addWeight, clearList }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(inputValue) && inputValue !== '') {
      addWeight(inputValue);
      setInputValue('');
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <div className="weight-input-container">
      <form onSubmit={handleSubmit} className="weight-input-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter weight"
          className="weight-input"
        />
        <button type="submit" className="weight-add-button">Add Weight</button>
      </form>
      <button onClick={clearList} className="weight-clear-button">Clear List</button>
    </div>
  );
}

export default WeightInput;
