import React, { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import usePasswordGenerator from "./hooks/usePasswordGenerator";

const App = () => {
  const [passLength, setPassLength] = useState(4);

  const [checkboxData, setCheckBoxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include lowercase letters", state: false },
    { title: "Include numbers", state: false },
    { title: "Include symbols", state: false },
  ]);

  const handleCheckBox = (index) => {
    const updatedCheckbox = [...checkboxData];
    updatedCheckbox[index].state = !updatedCheckbox[index].state;
    setCheckBoxData(updatedCheckbox);
  };

  // Handle Copy Button 
  const handleCopy = () => {
    navigator.clipboard.writeText(password)
  }

  const {password, errorMessage, generatePassword} = usePasswordGenerator();

  return (
    <div className="container">
      <div className="box">
        {/* Heading  */}
        <div className="heading">
          <h1>Password Generator</h1>
        </div>

        {/* Generate Password Box  */}
        <div className="password-box">
          <h2>{password}</h2>
          <FaCopy  onClick={handleCopy}/>
        </div>

        {/* Lower Part  */}
        <div className="lower-part">
          {/* Character Length  */}
          <div className="character-length-box">
            <span className="flex">
              <label>Character Length</label>
              <label>{passLength}</label>
            </span>
            <input
              type="range"
              max= {10}
              min={4}
              onChange={(e) => setPassLength(e.target.value)}
            />
          </div>

          {/* Check Boxes  */}
          <div className="options-box">
            {checkboxData.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    checked={item.state}
                    onChange={() => handleCheckBox(index)}
                  />
                  <label>{item.title}</label>
                </div>
              );
            })}
          </div>

          {/* Strength Box  */}
          <div className="strength-box">
            <h3>STRENGTH</h3>
            <p>Medium</p>
          </div>

          {errorMessage && <div className="errorMessage">{errorMessage}</div>}

          <button className="generate-btn" onClick={() => generatePassword(checkboxData, passLength)}>GENERATE</button>
        </div>
      </div>
    </div>
  );
};

export default App;
