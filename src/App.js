import React, { useState, useEffect } from 'react';
import WeightInput from './WeightInput';
import WeightList from './WeightList';

function App() {
  const [weights, setWeights] = useState([]);
  const [total, setTotal] = useState(0);

  // Load saved weights from localStorage
  useEffect(() => {
    const savedWeights = JSON.parse(localStorage.getItem('weights')) || [];
    setWeights(savedWeights);
    updateTotal(savedWeights);
  }, []);

  // Save weights to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('weights', JSON.stringify(weights));
    updateTotal(weights);
  }, [weights]);

  // Add new weight
  const addWeight = (weight) => {
    setWeights([...weights, parseFloat(weight).toFixed(2)]);
  };

  // Update the total
  const updateTotal = (weights) => {
    const total = weights.reduce((acc, val) => acc + parseFloat(val), 0).toFixed(2);
    setTotal(total);
  };

  // Edit an existing weight
  const updateWeight = (index, newWeight) => {
    const updatedWeights = [...weights];
    updatedWeights[index] = parseFloat(newWeight).toFixed(2);
    setWeights(updatedWeights);
  };

  // Delete a weight
  const deleteWeight = (index) => {
    const updatedWeights = weights.filter((_, i) => i !== index);
    setWeights(updatedWeights);
  };

  // Clear the entire list
  const clearList = () => {
    setWeights([]);
    localStorage.removeItem('weights');
  };

  return (
    <div>
      <h1>AgriSpark Weight Tracker</h1>
      <WeightInput addWeight={addWeight} clearList={clearList} />
      <WeightList weights={weights} updateWeight={updateWeight} deleteWeight={deleteWeight} />
      <div>Total: {total}</div>
    </div>
  );
}

export default App;
