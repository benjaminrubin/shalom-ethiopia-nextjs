import React, { useEffect, useState } from "react";

const useDisplayOnScroll = (displayPoint: number): boolean[] => {
  //   const [opacity, setOpacity] = useState("0");
  const [displayElement, setDisplayElement] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > displayPoint) {
      // Change 100 to any number of pixels you want
      // setOpacity("100");
      setDisplayElement(true);
    } else {
      //   setOpacity("0");
      setDisplayElement(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [displayElement];
};

export default useDisplayOnScroll;
