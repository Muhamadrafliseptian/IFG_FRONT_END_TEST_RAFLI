import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [selectedBox, setSelectedBox] = useState(null);
  
  const colors = [
    "#5d77f5",
    "#0fd085",
    "#ffba5b",
    "#f95e62",
    "lightpink"
  ];

  const handleColorChange = (color, index) => {
    setSelectedColor(color);
    setSelectedBox(index);
  };

  return (
    <div className="my-50 mx-auto">
      <div className="container">
        <div className="template">
          <h2>Form IFG</h2>
          <div className="template-form">
            <div className="form-row">
              <input placeholder="First name" />
              <input placeholder="Last name" />
              <input placeholder="Age" type="number" />
            </div>
            <input placeholder="Address" />
            <div className="form-row">
              <input placeholder="Place of work" />
              <input placeholder="Job title" />
            </div>
            <div className="form-row">
              <input placeholder="Phone number" />
              <input placeholder="Skype" />
            </div>
            <button type="submit">Submit</button>
          </div>
        </div>

        <div className="color-card">
          <h2>Pick a Color</h2>
          <div className="color-box" style={{ backgroundColor: selectedColor }}>
            <span className="color-pick">{selectedColor}</span>
          </div>
          
          <div className="color-picker">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`color-item ${selectedBox === index ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color, index)}
              >
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
