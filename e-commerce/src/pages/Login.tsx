import wlcImg from "../assets/wlc.png";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="h-full ">
      <header className="flex justify-around items-center  p-5">
        <div className="w-[105px] h-[1px] bg-[#BDBDBD]"></div>
        <img src={wlcImg} alt="logo" className="text-[#303030]" />
        <div className="w-[105px] h-[1px] bg-[#BDBDBD]"></div>
      </header>
      <div className="text-start w-full pl-5 ">
        <h2 className="text-[30px] text-[#909090] font-[700] leading-[45px]   tracking-wider  font-serif ">
          Hello!
        </h2>
        <h2 className="text-[30px] font-[700] leading-[45px] text-[#303030] font-serif  mt-3">
          WELCOME BACK
        </h2>
      </div>
      <form action="">
        <div className="flex flex-col">
          <label htmlFor="email">email</label>
          <input type="text" name="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password"> password</label>
          <input type="text" name="password" />
        </div>
        <h3>forgot password</h3>

        <Button
          className="bg-[#242424] text-white p-2 shadow-xl rounded w-[159px] h-[54px] text-[18px] font-[600] leading-[22.85px] font-serif"
          content="Login"
        />
        <Link to="signup">
          <h2>Signup</h2>
        </Link>
      </form>
    </div>
  );
};

export default Login;
