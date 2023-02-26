import { useState, useEffect } from "react";

export const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    console.log("Forced render");
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  });
};
