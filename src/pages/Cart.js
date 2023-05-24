import { useCartContext } from "../context/CartContext";
import CartItem from "../components/cart/CartItems";
import "./Cart.css";
const Cart = () => {
  const { cart } = useCartContext();
  console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);
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
        <hr />

        <div className="cart-item flex">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
