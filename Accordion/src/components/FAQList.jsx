import FAQItem from "./FAQItem";
import faqData from "../data/faqData.js";
import { useState } from "react";

const FAQList = ({ toggleDarkMode, darkMode }) => {
  const [openId, setOpenId] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  // Accordion toggle
  const toggleButton = (id) => {
    if (expandAll) {
      setExpandAll(false);
    }

    setOpenId((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    });
  };

  // Expand all button
  const toggleExpandAll = () => {
    setExpandAll((prev) => !prev);
    setOpenId(null);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text text-center sm:text-left w-full sm:w-auto">
          Frequently Asked Questions
        </h2>

        <div className="flex items-center space-x-4">
          {/* Expand all button  */}
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 cursor-pointer "
            onClick={toggleExpandAll}
          >
            <i
              className={`bx bx-${
                expandAll ? "collapse-alt" : "expand-alt"
              } text-lg`}
            ></i>
            <span>{expandAll ? "Collapse All" : "Expand All"}</span>
          </button>

          {/* Dark mode toggle button  */}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-r from-gray-200 to bg-gray-300 text-gray-700 dark:from-gray-700 dark:to-gray-800 dark:text-gray-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 cursor-pointer"
          >
            <i className={`bx bx-${darkMode ? "sun" : "moon"} text-xl `}></i>
          </button>
        </div>
      </div>

      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-indigo-100/50 dark:border-indigo-900/30 overflow-hidden transition-all duration-300">
        {faqData.map((item) => {
          return (
            <FAQItem
              key={item.id}
              item={item}
              toggleButton={toggleButton}
              isOpen={expandAll || openId === item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQList;

/* 💡 NOTE:
        - The item will be considered open (isOpen = true) if:
            - expandAll is true (open all items), OR

            - the current "item.id" matches the "openId" (open a specific item).
*/
