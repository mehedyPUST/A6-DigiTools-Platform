import React from 'react';
import { Check } from 'lucide-react'; // or import from 'react-icons/fa' or whichever icon library you're using

const ProductCard = ({ products }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mx-auto'>
            {
                products.map((product) => {
                    return (
                        <div key={product.id} className=" bg-white border-2 border-gray-50 rounded-2xl p-6 shadow-md relative">

                            <div className={`badge badge-soft  px-4 py-3 font-bold ${product.tag === 'Best Seller' ? 'badge-warning' : product.tag === 'New' ? 'badge-success' : product.tag === "Popular" ? "badge-primary" : 'badge-info'} absolute top-6 right-6`}>{product.tag}</div>

                            {/* Icon */}
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                                <img className='rounded-full p-2' src={product.icon} alt="" />
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {product.name}
                            </h2>

                            {/* Description */}
                            <p className=" line-clamp-2 text-gray-500 text-sm mb-4 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Price */}
                            <div className="mb-4">
                                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                                <span className="text-gray-500 text-sm">/{product.period === 'monthly' ? 'Mo' : product.period === 'yearly' ? 'Yr' : 'One-Time'}</span>
                            </div>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {product.features.map((feature, indx) => (
                                    <li key={indx} className="flex items-center gap-2 text-gray-600 text-sm">
                                        <Check size={16} className="text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button className="w-full py-3 rounded-full text-white font-medium bg-linear-to-r from-purple-600 to-pink-500 hover:opacity-90 transition">Buy Now</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ProductCard;