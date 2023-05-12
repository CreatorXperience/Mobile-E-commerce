import React from "react";
import "../../src/style.css";
type fortext = {
  className: string;
  content: string;
  disabled?: boolean;
  // content?: string;
  // padding: string;
  // width: string;
  // bgcolor?: string;
};
export const Button = ({ className, content, disabled }: fortext) => {
  return (
    <button className={className} disabled={disabled}>
      {content}
    </button>
  );
};

//   className={`w-${properties.width} bg-red-${properties.bgcolor}  my-4 text-slate-200 text-xl text-center rounded-xl py-${properties.padding}`}
