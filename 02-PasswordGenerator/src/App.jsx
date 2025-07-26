import React, { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import usePasswordGenerator from "./hooks/usePasswordGenerator";
import Checkbox from "./components/Checkbox";
import PasswordStrength from "./components/PasswordStrength";

const App = () => {
  const [passLength, setPassLength] = useState(4);
  const [copied, setCopied] = useState(false);

  const [checkboxData, setCheckBoxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const handleCheckBox = (index) => {
    const updatedCheckbox = [...checkboxData];
    updatedCheckbox[index].state = !updatedCheckbox[index].state;
    setCheckBoxData(updatedCheckbox);
  };

  // Handle Copy Button
  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
    }

    setTimeout(() => {
      setCopied(false);
    }, 1300);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

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
          {copied ? (
            <p>copied</p>
          ) : (
            <span className="copy-btn">
              <FaCopy onClick={handleCopy} />
            </span>
          )}
        </div>

        {/* Lower Part  */}
        <div className="lower-part">
          {/* Character Length  */}
          <div className="character-length-box">
            <span className="flex">
              <label className="pass-length-text">Character Length</label>
              <label className="pass-length">{passLength}</label>
            </span>
            <input
              className="slider"
              type="range"
              max={16}
              min={4}
              value={passLength}
              onChange={(e) => setPassLength(e.target.value)}
            />
          </div>

          {/* Check Boxes  */}
          <div className="options-box">
            {checkboxData.map((item, index) => {
              return (
                <Checkbox
                  key={index}
                  item={item}
                  index={index}
                  handleCheckBox={handleCheckBox}
                />
              );
            })}
          </div>

          {/* Strength Box  */}
          <PasswordStrength password={password} />

          {/* Error Message */}
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}

          <button
            className="generate-btn"
            onClick={() => generatePassword(checkboxData, passLength)}
          >
            GENERATE
          </button>
        </div>
      </div>
      <div className="credit">Developed By Sagar</div>
    </div>
  );
};

export default App;
