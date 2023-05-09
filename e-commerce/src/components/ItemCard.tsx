import cardSvg from "../assets/card.png";
import SumPrice from "./SumPrice";
import Svg from "./icons/Svg";

type itemProps = {
  img: string;
  darkShoppingBag?: React.ReactElement | undefined;
  sumPrice?: React.ReactElement | undefined;
  quantity: number;
};

const ItemCard = ({ img, darkShoppingBag, sumPrice, quantity }: itemProps) => {
  let costPrice = 3000;
  costPrice *= quantity;
  // if (typeof quantity != "undefined") {
  //   costPrice *= quantity;
  // }
  return (
    <div className=" w-[270px] cursor-pointer">
      <div className="flex justify-evenly">
        <img
          src={img}
          alt="image"
          className="w-auto h-[90px] rounded mt-[2px]"
        />

        <div>
          <p className="text-grey text-sm">Mininal stand</p>
          <span>${costPrice}</span>
          {sumPrice}
        </div>
        <div className="flex flex-col justify-between">
          {Svg.close()}
          {darkShoppingBag}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
