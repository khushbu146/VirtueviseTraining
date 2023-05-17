import React, { useState } from "react";
import "./ProductImage.css";
const ProductImage = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);
    //console.log(mainImage);
    return (
      <div>
        <div className="grid grid-four-column">
          {imgs.map((curElm, index) => {
            console.log(curElm);
            return (
              <figure>
                <img
                  src={curElm}
                  alt={curElm.filename}
                  className="box-image--style"
                  key={index}
                  onClick={() => setMainImage(curElm)}
                />
              </figure>
            );
          })}
        </div>
        {/* 2nd column  */}
        
        <div className="main-screen">
          <img src={mainImage} alt={mainImage.filename} />
        </div>
      </div>
    );
  };
  

export default ProductImage;