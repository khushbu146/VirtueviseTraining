import "./SingleProduct.css";
import ProductDetails from "./components/ProductDetails";


const SingleProduct = () => {

  return (
    <div className="container">
        <div className="singleProduct">
            <div className="grid grid-cols-2">
                {/* product Images  */}
                <div className="product_images">
                  <h1>Image Section</h1>
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