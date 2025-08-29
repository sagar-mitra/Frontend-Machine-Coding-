import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Otp = ({ otpLength = 6 }) => {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));

  const ref = useRef([]);

  // handle typing
  const handleChange = (e, index) => {
    const copyOtpFields = [...otpFields];
    console.log(isNaN(e.target.value));

    // if input is a number then it will take and move forward
    if (!isNaN(e.target.value)) {
      copyOtpFields[index] = e.target.value;
      setOtpFields(copyOtpFields);

      // move to next input if not last
      if (index < otpLength - 1) {
        ref.current[index + 1].focus();
      }
    }
  };

  // handle keyboard keys
  const handleKeyDown = (e, index) => {
    const key = e.key;

    const copyOtpFields = [...otpFields];

    // Handle Backspace
    if (key === "Backspace") {
      // Case 1: Current box has value → clear it
      if (copyOtpFields[index]) {
        copyOtpFields[index] = "";
        setOtpFields(copyOtpFields);
      } else if (index > 0) {
        // Case 2: Current is empty → clear previous and move focus back
        copyOtpFields[index - 1] = "";
        setOtpFields(copyOtpFields);
        ref.current[index - 1].focus();
      }

      return;
    }

    // handle arrow right
    if (key === "ArrowRight") {
      if (index < otpLength - 1) {
        ref.current[index + 1].focus();
      }
    }

    // handel arrow left
    if (key === "ArrowLeft") {
      if (index > 0) {
        ref.current[index - 1].focus();
      }
    }
  };

  // auto focus first input on load
  useEffect(() => {
    ref.current["0"].focus();
  }, []);

  return (
    <div>
      <p>Please insert your otp here</p>
      {otpFields.map((value, index) => {
        return (
          <input
            key={index}
            value={value}
            ref={(currentInput) => (ref.current[index] = currentInput)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1} // restrict 1 digit
            type="text"
          />
        );
      })}
    </div>
  );
};

export default Otp;

/**
 * 
 *  handleChange → always keeps only the last typed char & auto-focuses next box.

 *  handleKeyDown →
 *      - Backspace clears current → if empty, clears previous and moves left.
 *      - Arrow keys let you navigate left/right.
 *  
 *  useEffect → auto-focus first input on mount.
 *  
 *  maxLength={1} ensures only one digit per input.
 * 
 * 
 *
 * Typing Logic:
 *      - Takes only the last character typed → avoids multiple values.
 *              - copyOtpFields[index] = e.target.value.slice(-1);
 *              - slice(-1) -> this will give the last character always
 *
 *      - Automatically moves to the next box if not last one.
 *
 *
 * Backspace Logic:
 *     - If current box has a value → just clear it.
 *     - If current box is empty → move to the previous box and clear it.
 */
