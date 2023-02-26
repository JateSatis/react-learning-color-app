import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ isSelected, onSelect }) => {
  return (
    <FaStar color={isSelected ? "red" : "grey"} onClick={onSelect}></FaStar>
  );
};

export default Star;
