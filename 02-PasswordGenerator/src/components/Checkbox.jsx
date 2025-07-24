import React from "react";

const Checkbox = ({ item, index, handleCheckBox }) => {
  return (
    <div className="option">
      <input
        className="check-box"
        type="checkbox"
        checked={item.state}
        onChange={() => handleCheckBox(index)}
      />
      <label>{item.title}</label>
    </div>
  );
};

export default Checkbox;
