import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Cart.css";
import { useProductContext } from "./context/ProductContext";
import FormatPrice from "./components/FormatPrice";
import CartAmountToggle from "./components/CartAmountToggle";
const API = "https://dummyjson.com/products";

const Cart = () => {
  const { getSingleProduct, singleProduct } = useProductContext();
  const {
    _id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images
  } = singleProduct;
  const { id } = useParams();  
  useEffect(() => {
      getSingleProduct(`${API}/${id}`);
  }, []);
  
  const [amount, setAmount] = useState(1);
  const [ mrp, setMrp ] = useState(price + 250); 
  const [ cost, setCost ] = useState(price);
  const [ discount, setDiscount ] = useState(discountPercentage);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };



  const setPriceIncrease = () => {
    //console.log(cost);
    cost > 0 ? setCost(price + cost) : setCost(price);
    mrp > 0 ? setMrp(mrp + 250) : setMrp(price + 250);
    discount > 0 ? setDiscount(discountPercentage + discount): setDiscount(discountPercentage);
  }

  const setPriceDecrease = () =>{
    //console.log(cost);
    cost > price ? setCost(cost - price) : setCost(price);
    mrp > price ? setMrp(mrp - 250): setMrp(price + 250);
    discount > 0 ? setDiscount(discount - discountPercentage ): setDiscount(discountPercentage);
  }

  return (
    <div className="container">
      <div className=" row cart_row">
        <div className="div1">
            <div className=" rounded-lg shadow-md div2">
                <div className="div">
                     <div className="divdiv">
                        <img src={thumbnail} alt="" className="object-cover"/>
                    </div>
                    <div className="divdivdiv">
                        <h1 className="font-bold font-sans">{title}</h1>
                        <p>{description}</p>
                        <CartAmountToggle
                            amount={amount}
                            setDecrease={setDecrease}
                            setIncrease={setIncrease}
                            setPriceIncrease={setPriceIncrease}
                            setPriceDecrease={setPriceDecrease}
                        />
                    </div>
                </div>
                <button className=" shadow-md rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2">
                        PLACE ORDER
                </button>
            </div>
        </div>
        <div className="div2">
            <div className="w-full rounded-lg shadow-md lg:max-w-sm">
                <h1 className="price-details">PRICE DETAIL</h1>
                <div className="flex h-64 ">
                    <div className="text-left w-96 space-y-4 ml-5" >
                        <p>Price</p>
                        <p>Discount</p>
                        <p>Delivery Charged</p>
                    </div>
                    <div className="text-right w-1/2 space-y-4 mr-5">
                        <p><FormatPrice price={price + 250 < mrp? mrp: price + 250} /></p>
                        <p>{discountPercentage < discount? discount : discountPercentage}%</p>
                        <p>Free</p>
                    </div>
                </div>
                <hr/>
                <h1 className="font-bold h-8">Total Amount<FormatPrice price={ price < cost? cost : price } /></h1>
            </div>
        </div>
    </div>
</div>

  );
};

export default Cart;
