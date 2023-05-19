import React, { useState, useEffect } from "react";
import "./ProductImage.css";
const ProductImage = ({ imgs = [{ url: "" }] }) => {
    
    const [mainImage, setMainImage] = useState("");
    // console.log(imgs[0]);
    
    useEffect(() => {
      if (imgs.length > 0) {
        setMainImage(imgs[0]);
      }
    }, [imgs]);

    return (
      <div className="wrapper">
        <div className="grid grid-four-column">
          { imgs.map((curElm, index) => {
            //console.log(index);
            return (
              <figure>
                <img
                  src={curElm}
                  alt={curElm}
                  className="box-image--style image-style"
                  key={index}
                  onClick={() => setMainImage(curElm)}
                />
              </figure>
            );
          })}
        </div>
         {/* 2nd column  */}
        <div className="main-screen">
          <img src={mainImage} alt={mainImage} />
        </div>
      </div>
    );
  };
  

export default ProductImage;