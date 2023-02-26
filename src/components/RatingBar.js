import React from "react";
import Star from "./Star";

const RatingBar = ({ rating, onRate }) => {
  const createArrayOfLength = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <ul>
      {createArrayOfLength(5).map((index) => (
        <Star
          key={index}
					isSelected={index < rating}
					onSelect={() => onRate(index + 1)}
        />
      ))}
    </ul>
  );
};

export default RatingBar;
