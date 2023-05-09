import React from "react";

type InputProps = {
  className: string;
  inputClassName: string;
  name: string;
  placeholder: string;
};
const Input = ({
  className,
  inputClassName,
  name,
  placeholder,
}: InputProps) => {
  return (
    <div className="flex justify-center">
      <div className={className}>
        <label htmlFor="fullname" className="text-[10px] pl-1 text-gray-400 ">
          {name}
        </label>
        <input
          type="text"
          className={inputClassName}
          name="full name"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
