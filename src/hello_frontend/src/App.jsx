import React, { useState } from 'react';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBmi(bmiValue);
      determineBMICategory(bmiValue);
    } else {
      setMessage('Please enter valid weight and height');
    }
  };

  const determineBMICategory = (bmiValue) => {
    let bmiMessage = '';
    if (bmiValue < 18.5) {
      bmiMessage = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      bmiMessage = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      bmiMessage = 'Overweight';
    } else {
      bmiMessage = 'Obesity';
    }
    setMessage(bmiMessage);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <div>
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Height (meters): </label>
          <input
            type="number"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <button type="submit">Calculate BMI</button>
        </div>
      </form>

      {bmi && (
        <div style={{ marginTop: '20px' }}>
          <h2>Your BMI: {bmi}</h2>
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
};

export default App;
