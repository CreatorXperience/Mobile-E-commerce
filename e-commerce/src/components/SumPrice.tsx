import { useState, useMemo } from "react";

type SumProps = {
  quantity: number;
};

const SumPrice = ({ quantity}: SumProps) => {
  let [newQuantity, setNewQuantity] = useState(quantity)
  // just for testing
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
