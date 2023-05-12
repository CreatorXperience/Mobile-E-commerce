import React from "react";
import boardingImg from "../assets/boarding.png";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
const Boarding = () => {
  return (
    <div className="h-[100%] relative">
      <img src={boardingImg} alt="" className="h-[100%]" />
      <article className="absolute top-[35%] z-20 ">
        <h2 className="text-[24px] text-[#606060] font-semibold leading-[30.47px] pl-3 ">
          MAKE YOUR{" "}
        </h2>
        <h3 className="text-[#303030] text-[30px] leading-[38.09px] font-[700] mt-3 pl-3">
          HOME BEAUTIFUL
        </h3>
        <div className="flex justify-center w-full mt-5">
          <span
            className="text-[18px] leading-[35px] w-[88%] text-[#808080];
"
          >
            The best simple place where you discover most wonderful furnitures
            and make your home beautiful
          </span>
        </div>
      </article>
      <div className="absolute top-[78%] z-20 w-full flex justify-center text-center">
        <Link to="login">
          <Button
            className="bg-[#242424] text-white p-2 shadow-xl rounded w-[159px] h-[54px] text-[18px] font-[600] leading-[22.85px] font-serif"
            content="Get Started"
          />
        </Link>
      </div>
    </div>
  );
};

export default Boarding;
