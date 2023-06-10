import {useContext, useEffect} from "react";
import Svg from "./icons/Svg";
import SumPrice from "./SumPrice";
import {CartContextType, forCurrentProductState, forQTYPROPS } from "../type";
import { Context } from "../App";
import { QTYCONTEXT } from "../pages/Cart";

const ItemCard = (props:{key: number, Index: number, content: forCurrentProductState}) => {
  let {handleRemoveCart} = useContext(Context) as CartContextType
  let {Price,UPDATE_QTY_AND_PRICE} = useContext(QTYCONTEXT) as forQTYPROPS
  

  useEffect(()=> {

  },[])
// const  [quant, setQuantity] = useState(props.content.data.quantity)

// const [Fixedamount,setAmount] = useState(props.content.data["product-amount"])

// let  determinePriceBasedOnQTY = props.content.data["product-amount"]

const handleRemoveItem = ()=> {
handleRemoveCart(props.Index)
}

const handleMultiplyAmount = (amount: number)=> {
  UPDATE_QTY_AND_PRICE(props.Index,amount)
}



  return (
    <div className="w-[94%] flex mx-4  "> 
   <div className=" w-[100%] flex mx-1 mt-2 cursor-pointer border-b-2 py-1 rounded-sm">
     <div className="w-[100%] flex">  
   <div>
    <img src={props.content.data["product-image-link"]} alt="img" className="w-36 rounded-2xl"/>
     </div> 
<div className="w-[100%]"> 
     <div className="w-[100%] flex justify-between"> 
      <div className="text-gray-400 font-normal text-md mx-4">{props.content.data["product-name"]}</div> 
     
      <div onClick={handleRemoveItem}>{Svg.close()}</div>
     </div>

<div className="text-gray-900 font-semibold text-md mx-4"> $ <span>{Price.TotalPrice}</span></div>


<div className="w-[100%] flex justify-between"> 
<div className="mt-4"> <SumPrice quantity={Price.Quantity} getQuantity={handleMultiplyAmount} />  </div>

<div className="mx-4 mt-8">{Svg.darkShoppingBag()} </div>
</div>
</div>
</div>
    </div> 
    </div>
  );
};

export default ItemCard;
