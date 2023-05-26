import React from 'react';
import './Product.css';
import Card from "../components/Card";
const Product = () => {
    return(
        <div className='background  divide-x-4 
        divide-green-500 gap-1'>
            <div className=''>
                <div className='container mx-auto'>
                    <Card/>
                </div>
            </div>            
        </div>
    );
}
export default Product;