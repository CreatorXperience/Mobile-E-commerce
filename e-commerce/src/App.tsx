import React, { useState } from "react";
import Button from "./components/button";
import Footer from "./components/footer";
import Order from "./components/Order";
import cardSvg from "../src/assets/card.png";
import SumPrice from "./components/SumPrice";
import Svg from "./components/icons/Svg";

import "../src/style.css";
import Input from "./components/Input";
import SelectCountryInput from "./components/SelectCountryInput";
import ItemCard from "./components/ItemCard";
const App = () => {
  const [quantity, setQuantity] = useState<number>(1);

  // render() {
  //   let obj = {
  //     padding: "4",
  //     width: "4/5",
  //     content: "Check out",
  //     bgcolor: "900",
  //   };
  //   let obj2 = {
  //     padding: "4",
  //     width: "3/5",
  //     content: "Check out",
  //     bgcolor: "600",
  //   };
  //   let obj3 = {
  //     padding: "6",
  //     width: "5",
  //     content: "Check out",
  //     bgcolor: "400",
  //   };

  let totalPrice = 3900 * quantity;

  return (
    <div className="App">
      Components
      {/* <Button size={obj} />
        <Button size={obj2} />
        <Button size={obj3} /> */}
      <Order />
      {/* <SelectCountryInput className="border-2 flex flex-col w-[350px] h-[55px] pl-2 bg-white  rounded-md" /> */}
      <Input
        className="border-1 flex flex-col w-[350px] h-[55px] p-2 bg-gray-50 rounded-md"
        inputClassName="bg-gray-50 outline-none pl-1 text-sm mt-1"
        name="full name"
        placeholder="Ex:Bronu pham"
      />
      <Footer />
      <Input
        className="border-1 flex flex-col w-[350px] h-[55px] p-2 bg-white  rounded-md"
        inputClassName="outline-none pl-1 text-[12px] mt-1 placeholder-black font-bold"
        name="Email"
        placeholder="goodisgood@gmail.com"
      />
      <SelectCountryInput className="border-1 flex flex-col w-[350px] h-[55px] p-2 bg-gray-50 rounded-md" />
      <ItemCard
        img={cardSvg}
        // sumPrice={<SumPrice />}
        quantity={quantity}
        darkShoppingBag={Svg.favorite()}
      />
      <ItemCard
        img={cardSvg}
        quantity={quantity}
        sumPrice={<SumPrice quantity={quantity} setQuantity={setQuantity} />}
        // darkShoppingBag={Svg.favorite()}
      />
    </div>
  );
};
export default App;
