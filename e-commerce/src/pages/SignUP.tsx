import React from "react";
import wlcImg from "../assets/wlc.png";
import { Button } from "../components/button";
import {Link} from 'react-router-dom'
import Svg from "../components/icons/Svg";
import { AiOutlineEyeInvisible } from "react-icons/ai";

import { Context } from "../context/index";
import {
  ContextPropsP,
  StoreUserProps,
  UserProps,
  ContextProps,
} from "../type";
const SignUp = () => {
  const {
    toggleIcon,
    confirmPassword,
    email,
    name,
    emailError,
    password,
    passwordError,
    storeUserInfo,
    HandleChangeEmail,
    HandleChangeName,
    HandleChangePassword,
    handleTogglePassword,
    HandleChangeConfirmPassWord,
    handleGetUserInfo,
  } = React.useContext(Context) as ContextPropsP;

  console.log(storeUserInfo);
  return (
    <div className="h-full ">
      <header className="flex justify-around items-center  p-5 h-[18%]">
        <div className="w-[105px] h-[1px] bg-[#BDBDBD]"></div>
        <img src={wlcImg} alt="logo" className="text-[#303030]" />
        <div className="w-[105px] h-[1px] bg-[#BDBDBD]"></div>
      </header>
      <div className="text-start w-full pl-5  mb-2">
        <h2 className="text-[30px] text-[#909090] font-[500] leading-[45px]   tracking-wider  ">
          Hello!
        </h2>
        <h2 className="text-[30px] font-[700] leading-[45px] text-[#303030] mt-3">
          WELCOME BACK
        </h2>
      </div>
      <form
        action=""
        className="mt-5  w-[90%] ml-5 h-[550px] py-4 pl-5 bg-[#FFFF] shadow-2xl"
      >
        <div className="flex flex-col mt-4 mb-3 relative">
          <label htmlFor="name" className="pb-1  text-[#909090]">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="border-b-2 outline-none"
            onChange={HandleChangeName}
         required />
        </div>
        <div className="flex flex-col mt-4  mb-3 relative">
          <label htmlFor="email" className="pb-1  text-[#909090]">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            className="border-b-2 outline-none"
            onChange={HandleChangeEmail}
         required />
          {emailError && (
            <span className="absolute top-[65px] text-[10px] tracking-wider leading-4 font-semibold text-red-500 mb-3">
              a valid email is required
            </span>
          )}
        </div>
        <div className="flex flex-col mt-4  mb-3 relative">
          <label htmlFor="password" className="pb-1  text-[#909090]">
            Password
          </label>
          <input
            type={toggleIcon ? "text" : "password"}
            name="password"
            value={password}
            className="border-b-2 outline-none text-[20px] bg-white
            "
            onChange={HandleChangePassword}
          required/>
          {passwordError && (
            <span className="absolute top-[65px] text-[10px]  tracking-wider leading-4 font-semibold text-red-500 mb-3">
              password must contain at least an uppercase and a symbol
            </span>
          )}
          <span
            onClick={handleTogglePassword}
            className="absolute  top-[29px] right-[30px]"
          >
            {toggleIcon ? <AiOutlineEyeInvisible /> : Svg.eye()}
          </span>
        </div>
        <div className="flex flex-col mt-4  mb-3 relative">
          <label htmlFor="confirmPassword" className="pb-1 text-[#909090]">
            confirm Password
          </label>
          <input
            type={toggleIcon ? "text" : "password"}
            name="confirmPassword"
            value={confirmPassword}
            className="border-b-2 outline-none text-[20px] bg-white
            "
            onChange={HandleChangeConfirmPassWord}
         required />
          {password !== confirmPassword && (
            <span className="absolute top-[65px] text-[10px]  tracking-wider leading-4 font-semibold text-red-500 mb-3">
              both must be match!
            </span>
          )}
          <span
            onClick={handleTogglePassword}
            className="absolute  top-[29px] right-[30px]"
          >
            {toggleIcon ? Svg.eye(): ''}
          </span>
        </div>

        <div>
          <Link
            to={email !== '' && password !=='' && name !== '' && confirmPassword !== '' ? "/home" : '' }
            onClick={() => handleGetUserInfo(name, password, email)}
          >
            <div className="flex justify-center m-3 p-4 w-[289px]">
              <input type="submit"  className="bg-[#242424] text-white p-2 shadow-2xl rounded w-full h-[50px] text-[18px] font-[600] leading-[22.85px] font-serif" value="SIGN UP"  />
            </div>
          </Link>
        </div>
        <Link to="/login">
          <h2 className="text-center text-[18px] font-[600] leading-[24.55px]">
            <span className=" text-[14px] text-[#808080] hover:underline">
              Already have an acount?
              <span className="text-[#303030] font-bold"> SIGN IN</span>
            </span>
          </h2>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
