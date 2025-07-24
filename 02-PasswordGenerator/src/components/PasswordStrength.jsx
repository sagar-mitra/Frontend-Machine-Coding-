import React from "react";

const PasswordStrength = ({password}) => {
  // Password Strength Generate
  const generatePasswordStrength = () => {
    const passwordLength = password.length;

    if (passwordLength < 1) {
      return "";
    } else if (passwordLength <= 4) {
      return "Very Weak";
    } else if (passwordLength <= 7) {
      return "Poor";
    } else if (passwordLength <= 9) {
      return "Moderate";
    } else if (passwordLength <= 12) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = generatePasswordStrength();
  return (
    <div className="strength-box">
      <h3>STRENGTH</h3>
      <p>{passwordStrength}</p>
    </div>
  );
};

export default PasswordStrength;
