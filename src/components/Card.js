import React, {  useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

    const  navigate = useNavigate();
    const onClickHAndler=(id)=>{
    //console.log(id)
    navigate(`/singleProduct/${id}`);
 }
  return (
    
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
        {data.map((obj)=> (
            <div className="card" onClick={()=>onClickHAndler(obj.id)} key={obj.id}>
              <div className="card-item">
                <div className="card-image">
                  <img alt='' src={obj.thumbnail} className="imgClass" /> 
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