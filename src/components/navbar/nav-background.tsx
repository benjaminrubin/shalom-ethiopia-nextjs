"use client";
import React, { useEffect, useState } from "react";
import useDisplayOnScroll from "../hooks/useDisplayOnScroll";

const NavBackground = () => {
  const [displayElement] = useDisplayOnScroll(120);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-lime-600 h-[75px] w-100 z-[40] shadow-lg transition duration-600 opacity-${
        displayElement ? "100" : "0"
      }`}
    ></div>
  );
};

export default NavBackground;
