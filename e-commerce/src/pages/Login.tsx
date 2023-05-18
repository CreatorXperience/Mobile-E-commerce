import React, { useState } from "react";
import wlcImg from "../assets/wlc.png";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
import Svg from "../components/icons/Svg";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Context } from "../context/index";
import { ContextPropsP } from "../type";
const Login = () => {
  const [emailExist, setemailExist] = useState(false);
  const [passwordExist, setpasswordExist] = useState(true);

  const {
    toggleIcon,

    email,

    password,

    storeUserInfo,
    HandleChangeEmail,

    HandleChangePassword,
    handleTogglePassword,
  } = React.useContext(Context) as ContextPropsP;

  const checkIfEmailAndPassword = (email: string, password: string) => {
    const checkVaild = storeUserInfo?.find((user) => {
      if (user.email !== email) {
        setemailExist(true);
      } else {
        setemailExist(false);
      }
      if (user.password !== password) {
        setpasswordExist(true);
      } else {
        setpasswordExist(false);
      }
      return user;
    });
    return checkVaild;
  };

  return (
    <div className="h-full  ">
      <header className="flex justify-around items-center  p-5 h-[28%]">
        <div className="w-[105px] h-[1px] bg-[#BDBDBD]"></div>
        <img src={wlcImg} alt="logo" className="text-[#303030]" />
        <div className="w-[105px] h-[1px] bg-[#BDBDBD]"></div>
      </header>
      <div className="text-start w-full pl-5  mb-6">
        <h2 className="text-[30px] text-[#909090] font-[500] leading-[45px]   tracking-wider   ">
          Hello!
        </h2>
        <h2 className="text-[30px] font-[700] leading-[45px] text-[#303030]  mt-3">
          WELCOME BACK
        </h2>
      </div>
      <form
        action=""
        className="mt-5 ml-5 w-[90%] h-[437px] py-1 pl-5 bg-[#FFFF] shadow-2xl"
      >
        <div className="flex flex-col mt-5 mb-5 relative">
          <label htmlFor="email" className="pb-2  text-[#909090]">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            className="border-b-2 w-100 outline-none"
            onChange={HandleChangeEmail}
           required/>
          {emailExist && (
            <span className="absolute top-[75px] text-[10px] tracking-wider leading-4 font-semibold text-red-500 mb-3">
              incorrect email address
            </span>
          )}
        </div>
        <div className="flex flex-col mt-6  mb-5 relative">
          <label htmlFor="password" className="pb-2  text-[#909090]">
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
          {/* {passwordExist && (
            <span className="absolute top-[75px] text-[10px]  tracking-wider leading-4 font-semibold text-red-500 mb-3">
              incorrect password
            </span>
          )} */}
          <span
            onClick={handleTogglePassword}
            className="absolute  top-[29px] right-[30px]"
          >
            {toggleIcon ? <AiOutlineEyeInvisible /> : Svg.eye()}
          </span>
        </div>
        <h3 className="text-center m-8 text-[18px] font-[600] leading-[24.55px]">
          Forgot Password
        </h3>

        <div>
          <Link to="/home">
            <div
              className="flex justify-center m-5 p-4 w-[289px]"
              onClick={() => checkIfEmailAndPassword(email, password)}
            >
              <Button
                className="bg-[#242424] text-white p-2 shadow-2xl rounded w-full h-[50px] text-[18px] font-[600] leading-[22.85px] font-serif"
                content="Login"
                disabled={
                  emailExist === true || passwordExist === true ? true : false
                }
              />
            </div>
          </Link>
        </div>
        <Link to="/signup">
          <h2 className="text-center text-[18px] font-[600] leading-[24.55px]">
            SIGN UP
          </h2>
        </Link>
      </form>
    </div>
  );
};

export default Login;
