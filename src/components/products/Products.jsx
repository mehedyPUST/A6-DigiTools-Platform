import React, { Suspense } from 'react';
import { use } from 'react';
import ProductCard from "./productCard/ProductCard";


const ProductsContent = ({ productsPromise, cart, setCart }) => {
    const products = use(productsPromise);

    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        cart={cart}
                        setCart={setCart}
                    />
                ))}
            </div>
        </div>
    );
};

const Products = ({ productsPromise, cart, setCart }) => {
    return (
        <Suspense fallback={
            <div className="flex justify-center items-center min-h-75">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        }>
            <ProductsContent
                productsPromise={productsPromise}
                cart={cart}
                setCart={setCart}
            />
        </Suspense>
    );
};

export default Products;