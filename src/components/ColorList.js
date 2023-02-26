import React from "react";
import ColorItem from "./ColorItem";
import { useColors } from "../hooks/useColors";

const ColorList = () => {
  const { colors } = useColors();
  if (!colors.length) return <div>Sorry, no colors here</div>;
  return (
    <div className="colorList">
      {colors.map((color, index) => (
        <ColorItem key={index} {...color} />
      ))}
    </div>
  );
};

export default ColorList;
