import React, { useState } from 'react';
import './InputNumber.css'; // Import CSS file

const InputPattern = () => {
  const [number, setNumber] = useState(0); // State to store the input number
  const [pattern, setPattern] = useState([]); // State to store the generated pattern

  const handleChange = (e) => {
    const value = parseInt(e.target.value); // Parse input string to integer
    setNumber(value); // Update the state with the input value
  };

  // Function to generate the asterisk pattern
  const generatePattern = () => {
    let tempPattern = [];
    for (let i = 1; i <= number; i++) {
      tempPattern.push('*'.repeat(i));
    }
    for (let i = number - 1; i >= 1; i--) {
      tempPattern.push('*'.repeat(i));
    }
    setPattern(tempPattern);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    generatePattern(); // Call the generatePattern function
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> {/* Handle form submission */}
        <div className="input-container"> {/* Apply CSS class */}
          <input type="number" value={number} onChange={handleChange} />
          <button type="submit">Submit</button> {/* Change button type to submit */}
        </div>
      </form>
      <div>
        {pattern.map((row, index) => (
          <div key={index}>{row}</div>
        ))}
      </div>
    </div>
  );
};

export default InputPattern;
