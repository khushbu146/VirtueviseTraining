import "./SingleProduct.css";


const SingleProduct = () => {

  return (
    <div>
        <div className="singleProduct">
            <div className="grid grid-cols-2">
                {/* product Images  */}
                <div className="product_images">
                  <h1>Image Section</h1>
                </div>

                {/* product dAta  */}
                <div>
                    <div className="container">
                        <p>Product data</p>
                        <h2>name</h2>
                        <h4>stars</h4>
                        <h4>price</h4>
                        <h5>description</h5>
                        <h6>delivery logo</h6>
                        <h6>add to cart</h6> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SingleProduct;