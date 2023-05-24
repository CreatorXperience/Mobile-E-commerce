import { useState } from "react";
import Svg from "./icons/Svg";
import SumPrice from "./SumPrice";



const ItemCard = () => {
const [quant,getQuan] = useState(0)
  return (
    <div className=" w-[96%] flex mx-2 mt-2 cursor-pointer shadow-md py-1 rounded-sm">
   <div>
    <img src="https://i.pinimg.com/564x/8f/08/74/8f0874b2ad7b5d5fa46633cfed69017f.jpg" alt="img" className="w-36 rounded-2xl"/>
     </div> 
<div className="w-[100%]"> 
     <div className="w-[100%] flex justify-between"> 
      <div className="text-gray-400 font-normal text-md mx-4">Minimal Stand</div> 
      <div>{Svg.close()}</div>
     </div>

<div className="text-gray-900 font-semibold text-md mx-4"> $ <span>25.00</span></div>


<div className="w-[100%] flex justify-between"> 
<div className="mt-4"> <SumPrice quantity={0} getQuantity={getQuan} />  </div>

<div className="mx-4 mt-8">{Svg.darkShoppingBag()} </div>
</div>
</div>
    </div>
  );
};

export default ItemCard;
