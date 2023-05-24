import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  const incrementHandler = () => {
    setIncrease();
    // setPriceIncrease();
  }

  const decrementHandler = () => {
    setDecrease();
    // setPriceDecrease();
  }

  return (
    <div className="ml-4 mt-8">
      <div className="flex gap-7">
        <button onClick={decrementHandler}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={incrementHandler}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;