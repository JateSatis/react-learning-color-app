import React from "react";
import RatingBar from "./RatingBar";
import TrashCan from "./TrashCan";
import { useColors } from "../hooks/useColors";

const ColorItem = ({ id, title, color, rating }) => {
  const { rateColor, deleteColor } = useColors();

  return (
    <div className="colorItem">
      <h1>{title}</h1>
      <div
        style={{
          background: color,
          width: "50%",
          height: "30px",
          border: "2px solid black",
        }}
      ></div>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "50%",
        }}
      >
        <RatingBar rating={rating} onRate={(rating) => rateColor(id, rating)} />
        <TrashCan onRemove={() => deleteColor(id)} />
      </nav>
    </div>
  );
};

export default ColorItem;
