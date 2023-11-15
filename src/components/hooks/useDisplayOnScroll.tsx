import React, { useEffect, useState } from "react";

const useDisplayOnScroll = (displayPoint: number): boolean[] => {
  //   const [opacity, setOpacity] = useState("0");
  const [displayElement, setDisplayElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > displayPoint) {
        setDisplayElement(true);
      } else {
        setDisplayElement(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [displayPoint]);

  return [displayElement];
};

export default useDisplayOnScroll;
