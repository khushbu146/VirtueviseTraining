import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/ProductContext";
import "./SingleProduct.css";
import ProductDetails from "./components/ProductDetails";
import ProductImage from "./components/ProductImage";
const API = "https://dummyjson.com/products";


const SingleProduct = () => {

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
    <div className="container">
        <div className="singleProduct">
            <div className="grid grid-cols-2">
                {/* product Images  */}

                <div className="container">
                 <ProductImage imgs={images}/>
                </div>

                {/* product dAta  */}
                <div>
                    <div className="container">
                        <ProductDetails/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SingleProduct;