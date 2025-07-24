import React from "react";

const Checkbox = ({ item, index, handleCheckBox }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={item.state}
        onChange={() => handleCheckBox(index)}
      />
      <label>{item.title}</label>
    </div>
  );
};

export default Checkbox;
