import React, { use } from 'react';
import ProductsHeading from './productHeading/ProductsHeading';
import ProductCard from "./productCard/ProductCard"
const Products = ({ productsPromise }) => {
    const products = use(productsPromise);
    console.log(products)
    return (
        <div className='w-11/12 mx-auto'>
            <ProductsHeading></ProductsHeading>
            <div className='flex justify-center mb-4 mt-4'>
                <div role="tablist" className="tabs tabs-box">
                    <button role="tab" className=" btn btn-primary">Products</button>
                    <button role="tab" className="tab ">Cart(0)</button>
                </div>
            </div>

            <ProductCard products={products}></ProductCard>

        </div>
    );
};

export default Products;