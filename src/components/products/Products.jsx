import React, { Suspense } from 'react';
import { use } from 'react';           // React 19 use() hook
import ProductCard from "./productCard/ProductCard";


const ProductsContent = ({ productsPromise, cart, setCart }) => {
    const products = use(productsPromise);   // This will suspend until promise resolves

    // console.log('Loaded products:', products);

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

const Products = ({ productsPromise, activeTab, setActiveTab, cart, setCart }) => {
    return (
        <Suspense fallback={
            <div className="w-11/12 mx-auto py-12 text-center">
                <p className="text-gray-500">Loading products...</p>
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