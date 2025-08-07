# 🚦 Traffic Light (React Project)

This is a simple React project that simulates a traffic light system. The lights (green, yellow, red) change automatically every 2 seconds in a continuous loop.

---

## 📌 Features

- Lights cycle through green → yellow → red → green ...
- Uses React functional components
- Uses `useState` and `useEffect` hooks
- Simple and clean UI

---

## 🧠 How It Works

- The active light is managed using React state.
- A timer (`setInterval`) changes the active light every 2 seconds.
- The light turns **colored** if active, otherwise it stays **grey**.
- The cycle loops back to the first light after the last one.

---
## 🛠️ How to Run Locally
1. **Clone the entire repository:** 
```bash
   git clone https://github.com/sagar-mitra/Frontend-Machine-Coding-.git
```
2. **Navigate to the project folder:** 
```bash
cd 03-Traffic-Light
```
3. **Install dependencies:** 
```bash
npm install
```
4. **Run the app:** 
```bash
npm run dev
```


