import { useState,useEffect} from "react";

type SumProps = {
  quantity: number;
  getQuantity: (quant: number)=> void
};


const SumPrice = ({quantity,getQuantity}: SumProps) => {
  let [newQuantity, setNewQuantity] = useState(quantity)
  // just for testing

  let handleALL = ()=> {
   setNewQuantity(newQuantity <= 1 ? 1 :newQuantity-1)
  getQuantity(newQuantity)
  }

  let handleDecre = ()=> {
    setNewQuantity(newQuantity+1)
    getQuantity(newQuantity)
  }

  return (
    <div className="mx-2">

      <div>
        <button
          className="border-2 bg-gray-200 font-semibold m-2 h-auto p-[2px] text-xl  w-[36px] rounded"
          onClick={() => handleALL }
        >
          -
        </button>
        <span>{newQuantity}</span>
        <button
          className="border-2 bg-gray-200 font-semibold m-2 h-auto p-[2px] w-[36px] text-xl rounded"
          onClick={() =>handleDecre }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SumPrice;
