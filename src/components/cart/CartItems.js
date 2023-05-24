import React, {useState} from "react";
import FormatPrice from "../FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/CartContext";

const CartItem = ({ id, name, image, price, amount, stock }) => {
  
  const { removeItem } = useCartContext();
    // const [ setAmount] = useState(1);
  const setDecrease = () => {
    //  amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    //  amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div className="cart_heading grid grid-cols-5">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;