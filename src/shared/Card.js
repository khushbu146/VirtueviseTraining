import React, {  useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";

const API = "https://dummyjson.com/products";


const Card = () => {

    const [data, setData] = useState([]);
    const getProducts = async (API) => {
        const res = await axios.get(API);
        const products = res.data.products;
        setData(products)

    };
  
    useEffect(() => {
      getProducts(API);
    }, []);


  return (
    <div>
      {data.map((obj)=> (
      
            <div className="card">
              <div className="card-item">
                <div className="card-image">
                  <img alt='' src={obj.thumbnail}/>
                 
                </div>
                <div className="card-detail">
                  <h1 className="title-card">{obj.title}</h1>
                  <p className="desc-card">{obj.description}</p>
                </div>
              </div>
            </div>
      ))}

    </div>
  )
}

export default Card;