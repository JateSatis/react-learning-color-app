import React, { createContext, useState, useContext } from "react";
import colorsData from "../data/color-data.json";
import { v4 } from "uuid";

const ColorsContext = createContext();
const useColors = () => useContext(ColorsContext);

const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState(colorsData);

  const addColor = (title, color, rating) => {
    const newColors = [
      ...colors,
      {
        id: v4(),
        title,
        color,
        rating,
      },
    ];
    setColors(newColors);
  };

  const deleteColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  const rateColor = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : { ...color }
    );
    setColors(newColors);
  };

  return (
    <ColorsContext.Provider
      value={{ colors, addColor, deleteColor, rateColor }}
    >
      {children}
    </ColorsContext.Provider>
  );
};

export { ColorProvider, useColors };
