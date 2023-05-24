import React, { useState, useEffect } from "react";
import "./ProductImage.css";
const ProductImage = ({ imgs = [{ url: "" }] }) => {
    
    const [mainImage, setMainImage] = useState("");
     
    useEffect(() => {
      if (imgs.length > 0) {
        setMainImage(imgs[0]);
      }
    }, [imgs]);

    return (
      <div className="wrapper">
        <div className="grid grid-four-column">
          { imgs.map((curElm, index) => {
            return (
              <figure key={curElm.id}>
                <img
                  src={curElm}
                  alt={curElm}
                  className="box-image--style image-style"
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