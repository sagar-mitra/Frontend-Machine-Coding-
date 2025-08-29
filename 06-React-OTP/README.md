<h1 align="center">🔐 React OTP Input </h1>

This is a simple React OTP Input that lets users enter one-time passwords or verification codes.
It automatically moves to the next box when typing, handles backspace to clear values properly, and supports arrow key navigation.

## ✨ Features

- Configurable length → Default is 6 digits, but you can set any length using otpLength prop.

- Auto-focus navigation →

    - Typing a digit moves to the next input.

    - Arrow keys (←, →) move between boxes.

- Backspace handling →

    - Clears current box if it has a value.

    - If current box is empty, it clears the previous box and moves focus left.

- Auto-focus first input on component mount.

- Restricts one digit per box (maxLength={1}).

- Fully controlled state (otpFields) → OTP value is always available.