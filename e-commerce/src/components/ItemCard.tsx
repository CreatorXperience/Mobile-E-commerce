import { useState } from "react";
import Svg from "./icons/Svg";
import SumPrice from "./SumPrice";
import { forCartItem, forCurrentProductState } from "../type";



const ItemCard = (props:{key: number, content: forCurrentProductState}) => {
const [quant,getQuan] = useState(0)




  return (
    <div className="w-[100%] flex "> 
   <div className=" w-[100%] flex mx-2 mt-2 cursor-pointer shadow-md py-1 rounded-sm">
     <div className="w-[100%] flex"> 
   <div>
    <img src={props.content.data["product-image-link"]} alt="img" className="w-36 rounded-2xl"/>
     </div> 
<div className="w-[100%]"> 
     <div className="w-[100%] flex justify-between"> 
      <div className="text-gray-400 font-normal text-md mx-4">{props.content.data["product-name"]}</div> 
     
      <div>{Svg.close()}</div>
     </div>

<div className="text-gray-900 font-semibold text-md mx-4"> $ <span>{props.content.data["product-amount"]}</span></div>


<div className="w-[100%] flex justify-between"> 
<div className="mt-4"> <SumPrice quantity={0} getQuantity={getQuan} />  </div>

<div className="mx-4 mt-8">{Svg.darkShoppingBag()} </div>
</div>
</div>
</div>
    </div> 
    </div>
  );
};

export default ItemCard;
