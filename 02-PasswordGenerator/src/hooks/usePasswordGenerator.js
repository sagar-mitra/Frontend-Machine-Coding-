import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (checkBoxData, length) => {
    let charset = "";
    let generatedPassword = "";

    const selectedOption = checkBoxData.filter((data) => data.state);

    if(selectedOption.length === 0) {
        setErrorMessage("Please select an option");
        setPassword("");
        return;
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;

        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;

        case "Include Numbers":
          charset += "0123456789";
          break;

        case "Include Symbols":
          charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);

      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage("")

  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
