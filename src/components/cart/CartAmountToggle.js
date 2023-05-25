import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  // const incrementHandler = () => {
  //   setIncrease();
  //   // setPriceIncrease();
  // }

  // const decrementHandler = () => {
  //   setDecrease();
  //   // setPriceDecrease();
  // }

  return (
    <div className="">
      <div className="flex gap-7">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;