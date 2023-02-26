import React, { useState, useEffect, useMemo } from "react";
import { useAnyKeyToRender } from "../hooks/useAnyKeyToRender";

const CheckBox = ({ children, click }) => {
  useAnyKeyToRender();

  const [value, setValue] = useState("");
  const words = useMemo(() => children.split(""), [children]);

  useEffect(() => {
    console.log(`typing: ${words}`);
  }, [words]);

  return (
    <>
      <input
        name="text"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={click}>Click me</button>
    </>
  );
};

export default CheckBox;
