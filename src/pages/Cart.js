import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import CartItem from "../components/cart/CartItems";
import FormatPrice from "../components/FormatPrice";
import BuyNow from "../components/BuyNow";
import "./Cart.css";
const Cart = () => {
  const { cart, clearCart, shipping_fee, total_price } = useCartContext();
  //console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);
  //console.log(cart);
  const [ btnDisplay , setBtnDisplay ] = useState(false);

  useEffect(() => {
    if (cart) {
      setBtnDisplay(true);
    }
  },[]);

  return (
    <div>
      <div className="container ml-5">
        <div className="cart_heading grid grid-cols-5">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr/>
        <div className="cart-item flex">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div> 
        <div className={btnDisplay ? "cart-button grid grid-cols-2 gap-5": "hidden"} >
          {/* {console.log(btnDisplay)} */}
          <NavLink to="/" className="">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> 
              CONTINUE SHOPPING
            </button>
          </NavLink>
          <button type="button" className="clear-btn text-white bg-red-500 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none" onClick={clearCart}> 
              CLEAR CART
          </button>
        </div>

        
        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
            <BuyNow/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
