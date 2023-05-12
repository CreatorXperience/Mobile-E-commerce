import { useState } from "react";
import wlcImg from "../assets/wlc.png";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
import Svg from "../components/icons/Svg";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { validEmail, validPassword } from "../components/Regex";
const Login = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const HandleChangeEmail = function (e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    console.log(value);

    setEmail(value);
    if (!validEmail.test(value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const HandleChangePassword = function (
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    let value = e.target.value;

    setPassword(value);
    if (!validPassword.test(value)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleTogglePassword = function () {
    setToggleIcon((prev) => !prev);
  };

  return (
    <div className="h-full ">
      <header className="flex justify-around items-center  p-5 h-[28%]">
        <div className="w-[105px] h-[1px] bg-[#BDBDBD]"></div>
        <img src={wlcImg} alt="logo" className="text-[#303030]" />
        <div className="w-[105px] h-[1px] bg-[#BDBDBD]"></div>
      </header>
      <div className="text-start w-full pl-5  mb-6">
        <h2 className="text-[30px] text-[#909090] font-[700] leading-[45px]   tracking-wider  font-serif ">
          Hello!
        </h2>
        <h2 className="text-[30px] font-[700] leading-[45px] text-[#303030] font-serif  mt-3">
          WELCOME BACK
        </h2>
      </div>
      <form
        action=""
        className="mt-5  w-[345px] h-[437px] pl-5 bg-[#FFFF] shadow-2xl"
      >
        <div className="flex flex-col mt-5 mb-5 relative">
          <label htmlFor="email" className="pb-5">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            className="border-b-2 outline-none"
            onChange={HandleChangeEmail}
          />
          {emailError && (
            <span className="absolute top-[75px] text-[10px] tracking-wider leading-4 font-semibold text-red-500 mb-3">
              a valid email is required
            </span>
          )}
        </div>
        <div className="flex flex-col mt-6  mb-5 relative">
          <label htmlFor="password" className="pb-5">
            Password
          </label>
          <input
            type={toggleIcon ? "text" : "password"}
            name="password"
            value={password}
            className="border-b-2 outline-none text-[20px] bg-white
            "
            onChange={HandleChangePassword}
          />
          {passwordError && (
            <span className="absolute top-[75px] text-[10px]  tracking-wider leading-4 font-semibold text-red-500 mb-3">
              password must contain upperCase,lowerCase and symbol
            </span>
          )}
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
          <Link to={passwordError || emailError ? "" : "/signup"}>
            <div className="flex justify-center m-5 p-4 w-[289px]">
              <Button
                className="bg-[#242424] text-white p-2 shadow-xl rounded w-full h-[50px] text-[18px] font-[600] leading-[22.85px] font-serif"
                content="Login"
                disabled={email === "" || password === "" ? true : false}
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
