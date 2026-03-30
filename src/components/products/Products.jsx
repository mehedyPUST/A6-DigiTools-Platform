import React from 'react';
import ProductsHeading from './productHeading/ProductsHeading';
import ProductCard from "./productCard/ProductCard"
const Products = () => {
    return (
        <div>
            <ProductsHeading></ProductsHeading>
            <div className='flex justify-center mb-4 mt-4'>
                <div role="tablist" className="tabs tabs-box">
                    <a role="tab" className=" btn btn-primary">Products</a>
                    <a role="tab" className="tab ">Cart(0)</a>
                </div>
            </div>
            <ProductCard></ProductCard>
        </div>
    );
};

export default Products;