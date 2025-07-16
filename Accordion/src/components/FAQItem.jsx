import { useRef } from "react";

const FAQItem = ({ item, isOpen, toggleButton }) => {
  const answerRef = useRef(null);

  return (
    <div
      className="border-b border-gray-200 dark:border-gray-700 last:border-none transition-colors duration-300 hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-transparent dark:hover:from-gray-800/50 dark:hover:to-transparent"
      id={`question-id${item.id}`}
    >
      {/* Accordion Questions  */}
      <button
        className={`w-full py-5 px-4 flex justify-between items-center text-left rounded-lg focus:outline-none transition-all duration-200 ${
          isOpen
            ? "bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200/90 dark:from-indigo-900/80 dark:via-purple-900/80 dark:to-indigo-900/70 text-shadow-purple-700 dark:text-white font-medium"
            : "cursor-pointer text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 dark:hover:from-indigo-400 dark:hover:to-purple-400"
        } `}
        onClick={() => toggleButton(item.id)}
      >
        <span className="text-lg font-medium pr-6">{item.question}</span>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-8 min-w-8 aspect-square rounded-full ${
            isOpen
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 shadow-md"
              : "bg-gray-200 dark:bg-gray-700 "
          }transition-all duration-200`}
        >
          <i
            class={`bx  bx-${isOpen ? "minus" : "plus"} ${
              isOpen ? "text-white" : "text-gray-500 dark:text-gray-500"
            } `}
          ></i>
        </div>
      </button>
      {/* Accordion answers */}
      <div
        className="overflow-hidden transition-all duration-300"
        id={`answer-id-${item.id}`}
        ref={answerRef}
        style={{
          maxHeight: isOpen ? answerRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-4 pt-0 pb-5 text-gray-600 dark:text-gray-300 ">
          <div className="p-3 overflow-y-auto rounded-lg max-h-[300px] ">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
