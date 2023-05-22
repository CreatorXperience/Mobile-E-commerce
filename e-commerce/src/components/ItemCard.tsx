import { useState } from "react";
import Svg from "./icons/Svg";

type itemProps = {
  img: string;
  darkShoppingBag?: React.ReactElement | undefined;
  sumPrice?: React.ReactElement | undefined;
  quantity: number;
};

const ItemCard = ({img,darkShoppingBag,sumPrice, quantity }: itemProps) => {
  let costPrice = 3000;
  costPrice *= quantity;
  

  const [quant, getQuant] = useState(0)
  return (
    <div className=" w-[96%] mx-2 mt-2 cursor-pointer shadow-md py-2 rounded-sm">
      <div className="flex justify-evenly">
        <img
          src={img}
          alt="productImage"
          className="w-auto h-[90px] rounded mt-[2px]"
        />

        <div>
          <p className="text-grey text-sm">Mininal stand</p>
          <span>${costPrice}</span>
          {sumPrice}
        </div>
        <div className="flex  justify-between">
          {Svg.close()}

          {darkShoppingBag}
        </div>

      
      </div>
    </div>
  );
};

export default ItemCard;
