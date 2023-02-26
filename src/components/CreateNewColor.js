import React from "react";
import useInput from "../hooks/useInput";
import { useColors } from "../hooks/useColors";

const CreateNewColor = () => {
  const { addColor } = useColors();

  const [title, resetTitle] = useInput("");
  const [color, resetColor] = useInput("#ffffff");
  const [rating, resetRating] = useInput(1);

  const submit = (e) => {
    e.preventDefault();
    if (title) {
      addColor(title.value, color.value, rating.value);
      resetColor("#ffffff");
      resetTitle("");
      resetRating(1);
    } else {
      alert("Write a title");
    }
  };

  return (
    <form onSubmit={submit}>
      <input type="text" {...title} />
      <input type="color" {...color} />
      <label htmlFor="ratingInput">{rating.value}</label>
      <input type="range" id="ratingInput" min="1" max="5" {...rating} />
      <button type="submit">Create new color</button>
    </form>
  );
};

export default CreateNewColor;
