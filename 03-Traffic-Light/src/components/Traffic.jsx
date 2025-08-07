import React, { useEffect, useState } from "react";
import Light from "./Light";

const Traffic = () => {
  const [active, setActive] = useState(0);
  const colors = ["green", "yellow", "red"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((pre) => {
        return (pre + 1) % colors.length;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {colors.map((color, index) => {
        return <Light key={index} color={color} active={active === index} />;
      })}
    </div>
  );
};

export default Traffic;
