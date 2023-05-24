import React, {  useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const AddToCart = ({ product }) => {
  
  const [amount, setAmount] = useState(1);

  const [isAdded, setIsAdded] = useState(false);

  const { addToCart } = useCartContext();
  
  const { id, price } = product; 

  const addedToCart = () => {
    setIsAdded(!isAdded);
  } 

  const cartHandler = () => {
    addToCart(id,amount,price,product);
    addedToCart();
  }

  useEffect(() => {
    let timer;
    if(isAdded){
      timer = setTimeout(() => {
        setIsAdded(false);
      }, 3000);  //in milliseconds
    }
    return () => clearTimeout(timer);
  }, [isAdded]);

  return (
    <div>
         {isAdded ? (
        <div className="fixed z-10 inset-0 flex items-center justify-center">
          <div className="bg-white w-64 p-4 rounded shadow-lg">
            <p className="text-green-500 font-bold">Added to Cart</p>
          </div>
        </div>
      ) : null}
      <NavLink to="/cart">
        <button 
          type="button" 
          className="text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={cartHandler}  
        >
              AddToCart
        </button>
      </NavLink>
    </div>
  );
};

export default AddToCart;