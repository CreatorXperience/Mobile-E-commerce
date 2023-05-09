import { useState, useMemo } from "react";

type SumProps = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const SumPrice = ({ quantity, setQuantity }: SumProps) => {
  // just for testing
  return (
    <div>
      {/* <span>{}</span> */}
      <div>
        <button
          className="border-2  m-2 h-auto p-[2px] w-[29px] rounded"
          onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="border-2  m-2 h-auto p-[2px] w-[29px] rounded"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SumPrice;
