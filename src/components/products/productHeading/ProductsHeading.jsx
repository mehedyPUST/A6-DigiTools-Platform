import React from 'react';

const ProductsHeading = ({ setActiveTab, activeTab, cart }) => {
    return (
        <div className=' w-11/12 mx-auto text-center space-y-2 mt-5'>
            <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

            <div className='flex justify-center mb-4 mt-4'>
                <div role="tablist" className="tabs tabs-box px-10 py-2 rounded-xl bg-white shadow-md">
                    <button
                        onClick={() => setActiveTab('products')}

                        role="tab"
                        className={`tab rounded-full w-40 ${activeTab === 'products' ? 'bg-purple-500 text-white' : ''}`}>Products
                    </button>

                    <button
                        onClick={() => setActiveTab('cart')}
                        role="tab"
                        className={`tab rounded-full w-40 ${activeTab === 'cart' ? 'bg-purple-500 text-white' : ''}`}>Cart ({cart.length})
                    </button>
                </div>
            </div>
        </div>


    );
};

export default ProductsHeading;