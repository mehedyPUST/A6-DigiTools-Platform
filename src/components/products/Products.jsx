import React, { use } from 'react';
import ProductsHeading from './productHeading/ProductsHeading';
import ProductCard from "./productCard/ProductCard"
const Products = ({ productsPromise, activeTab, setActiveTab, setCart, cart }) => {
    const products = use(productsPromise);
    console.log(products)
    return (
        <div className='w-11/12 mx-auto'>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mx-auto'>
                {
                    products.map((product) => {
                        return (
                            <ProductCard product={product} cart={cart} setCart={setCart}></ProductCard>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Products;