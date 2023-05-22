import { useState,useEffect} from "react";

type SumProps = {
  quantity: number;
  getQuantity: (quant: number)=> void
};


const SumPrice = ({quantity,getQuantity}: SumProps) => {
  let [newQuantity, setNewQuantity] = useState(quantity)
  // just for testing
useEffect(()=> {
getQuantity(newQuantity)
},[newQuantity,getQuantity])
  return (
    <div className="mx-4">

      <div>
        <button
          className="border-2 bg-gray-300 font-semibold m-2 h-auto p-[2px]  w-[30px] rounded"
          onClick={() => setNewQuantity( newQuantity === 0 ? 0 :newQuantity-1)}
        >
          -
        </button>
        <span>{newQuantity}</span>
        <button
          className="border-2 bg-gray-300 font-semibold m-2 h-auto p-[2px] w-[30px] rounded"
          onClick={() => setNewQuantity(newQuantity+1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SumPrice;
