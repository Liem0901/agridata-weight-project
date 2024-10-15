import React, { useState } from 'react';
import './WeightList.css'; // Optional: Add this if you want to style your table

function WeightList({ weights, updateWeight }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditValue(weights[index]);
  };

  const handleUpdate = (index) => {
    if (!isNaN(editValue)) {
      updateWeight(index, editValue);
      setEditingIndex(null);
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Weight</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {weights.map((weight, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                <span>{weight}</span>
              )}
            </td>
            <td>
              {editingIndex === index ? (
                <button onClick={() => handleUpdate(index)}>Update</button>
              ) : (
                <button onClick={() => handleEdit(index)}>Edit</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WeightList;
