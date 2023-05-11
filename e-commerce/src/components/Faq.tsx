import React, { useState } from "react";
import Svg from "./icons/Svg";
export const Faq = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="flex justify-center">
      <div className="flex justify-between border-2 w-[100%] p-5 mt-2 shadow-md rounded cursor-pointer">
        <div>FAQ</div>
        <div onClick={handleToggle}>{toggle ? Svg.back() : Svg.forward()}</div>
      </div>
    </div>
  );
};
