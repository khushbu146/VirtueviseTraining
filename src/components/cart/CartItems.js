import React, {useState} from "react";
import FormatPrice from "../FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/CartContext";

const CartItem = ({ id, name, image, price, amount, max }) => {

  const { removeItem } = useCartContext();
    const [ amountOfProduct, setAmount] = useState(amount);
  const setDecrease = () => {
      amountOfProduct > 1 ? setAmount(amountOfProduct - 1) : setAmount(1); 
  };

  const setIncrease = () => {
      amountOfProduct < max ? setAmount(amountOfProduct + 1) : setAmount(max);
  };

  return (
    <div className="cart_heading grid grid-cols-5">
      <div className="cart-image--name flex gap-2">
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
        amount={amountOfProduct}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amountOfProduct} />
        </p>
      </div>
      <div>
        <FaTrash className="fill-rose-400 hover:fill-rose-800" onClick={() => removeItem(id)}/>
      </div>
    </div>
  );
};

export default CartItem;