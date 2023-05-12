import React from "react";
import "../../src/style.css";
type fortext = {
  className: string;
  content: string;
  // content?: string;
  // padding: string;
  // width: string;
  // bgcolor?: string;
};
export const Button = ({ className, content }: fortext) => {
  return <button className={className}>{content}</button>;
};

//   className={`w-${properties.width} bg-red-${properties.bgcolor}  my-4 text-slate-200 text-xl text-center rounded-xl py-${properties.padding}`}
