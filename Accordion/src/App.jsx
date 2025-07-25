import { useState } from "react";
import FAQList from "./components/FAQList";
import { useEffect } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // useEffect runs whenever `darkMode` changes
  useEffect(() => {
    // It adds or removes the 'dark' class on the <html> element
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // save the theme to the local storage
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  // Toggle function to switch between light and dark modes
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950  transition-colors duration-300 font-(family-name:--font-prompt)">
      <div className="container mx-auto py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent inline-block bg-clip-text">
            FAQ Center
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Find answers to the most common questions about Tailwind css and web
            development.
          </p>
        </header>
      </div>
      <FAQList toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <footer className="text-center font-(family-name:--font-inter) text-sm  text-gray-500/70 mt-7 pb-10">
        <p>Developed by Sagar</p>
      </footer>
    </div>
  );
};

export default App;
