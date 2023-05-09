import { useState } from "react";
import Svg from "./icons/Svg";

type SelectProps = {
  className: string;
};

const SelectCountryInput = ({ className }: SelectProps) => {
  const [selectCountry, setSelectCountry] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("select country");

  const allCountrys: string[] = ["lagos", "Canada", "europe", "USA"];
  return (
    <div className="flex justify-end  m-2">
      <div className={className}>
        <label htmlFor="" className="text-[12px]">
          country
        </label>
        <div className="flex justify-between pr-2  cursor-pointer mt-2">
          <span className="text-[15px] font-semibold"> {country}</span>
          <span onClick={() => setSelectCountry((perv) => !perv)}>
            {Svg.baseline()}
          </span>
        </div>
        <ul
          className={`bg-gray-300 text-black flex flex-col justify-center mt-3  rounded-md transition cursor-pointer ${
            selectCountry ? "visible" : "hidden"
          }`}
        >
          {allCountrys.map((country, index) => (
            <li
              key={index}
              onClick={() => setCountry(country)}
              className="pl-3"
            >
              {country}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectCountryInput;
