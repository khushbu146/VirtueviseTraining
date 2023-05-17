import React, { useEffect }from "react";
import { useProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import Star from "./Star";
import "./ProductDetails.css";
import FormatPrice from "./FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
const API ="https://dummyjson.com/products";
const ProductDetails = () => {
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

        

    
    return (
        <div className="product-data ">
              <h2>{title}</h2>
              <Star star={rating} />
              <p className="product-data-price">
                MRP:
                <del>
                    <FormatPrice price={price + 250} />
                </del>
              </p>
              <p className="product-data-price product-data-real-price">
                Deal of the Day: <FormatPrice price={price} />
              </p>
              <p>{description}</p>

              <div className=" grid grid-cols-4 product-data-warranty">
                <div className="product-warranty-data">
                    <TbTruckDelivery className="warranty-icon" />
                    <p>Free Delivery</p>
                </div>
                <div className="product-warranty-data">
                    <TbReplace className="warranty-icon" />
                    <p>30 Days Replacement</p>
                </div>
                <div className="product-warranty-data">
                    <TbTruckDelivery className="warranty-icon" />
                    <p>Fast Delivered </p>
                </div>
                <div className="product-warranty-data">
                    <MdSecurity className="warranty-icon" />
                    <p>2 Year Warranty </p>
                </div>
            </div>
            <div className="product-data-info">
            <p>
              Available:
              <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
            </p>
            <p>
              ID : <span> {id} </span>
            </p>
            <p>
              Brand :<span> {brand} </span>
            </p>
          </div>
                <h6>add to cart</h6>  
        </div>
    );
}

export default ProductDetails; 


