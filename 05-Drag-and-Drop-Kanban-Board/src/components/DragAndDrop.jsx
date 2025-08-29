import { useRef, useState } from "react";

const DragAndDrop = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  const taskRef = useRef();
  const containerRef = useRef();

  const handleDragStart = (e, container, task) => {
    taskRef.current = task;
    containerRef.current = container;
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDrop = (targetContainer) => {
    const task = taskRef.current;
    const sourceContainer = containerRef.current;

    setData((prev) => {
      const newData = {...prev};
      newData[sourceContainer] = newData[sourceContainer].filter((i) => i !== task);
      newData[targetContainer] = [...newData[targetContainer], task];
      return newData;
    })
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  return (
    <div className="option-container">
      {Object.keys(data).map((container, index) => {
        return (
          <div onDrop={() => handleDrop(container)} onDragOver={handleDragOver} key={index}>
            <h1>{container}</h1>
            <div className="task-container">
              {data[container].map((task, index) => {
                return (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, container, task)}
                    onDragEnd={handleDragEnd}
                    className="task"
                  >
                    {task}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DragAndDrop;
