import React, { useState } from "react";
import Svg from "./icons/Svg";
export const Faq = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div>
      <div className="flex justify-between border-2 w-[30%] p-5 mt-2 shadow-md rounded cursor-pointer">
        <div>FAQ</div>
        <div onClick={handleToggle}>
          {toggle ? Svg.dropdown2() : Svg.dropdown()}
        </div>
      </div>
    </div>
  );
};
