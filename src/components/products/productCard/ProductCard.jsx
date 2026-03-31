// import { Check, ShoppingCart } from 'lucide-react';

// const ProductCard = ({ product, cart, setCart }) => {
//     // Check if product is already in cart (better than local state)
//     const isInCart = cart.some(item => item.id === product.id);

//     const cartHandler = () => {

//         if (!isInCart) {
//             setCart(previous => [...previous, product]);
//         }
//     };

//     return (
//         <div key={product.id} className=" bg-white border-2 border-gray-50 rounded-2xl p-6 shadow-md relative">

//             <div className={`badge badge-soft  px-4 py-3 font-bold ${product.tag === 'Best Seller' ? 'badge-warning' : product.tag === 'New' ? 'badge-success' : product.tag === "Popular" ? "badge-primary" : 'badge-info'} absolute top-6 right-6`}>{product.tag}</div>

//             {/* Icon */}
//             <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
//                 <img className='rounded-full p-2' src={product.icon} alt="" />
//             </div>

//             {/* Title */}
//             <h2 className="text-xl font-semibold text-gray-900 mb-2">
//                 {product.name}
//             </h2>

//             {/* Description */}
//             <p className=" line-clamp-2 text-gray-500 text-sm mb-4 leading-relaxed">
//                 {product.description}
//             </p>

//             {/* Price */}
//             <div className="mb-4">
//                 <span className="text-2xl font-bold text-gray-900">${product.price}</span>
//                 <span className="text-gray-500 text-sm">/{product.period === 'monthly' ? 'Mo' : product.period === 'yearly' ? 'Yr' : 'One-Time'}</span>
//             </div>

//             {/* Features */}
//             <ul className="space-y-2 mb-6">
//                 {product.features.map((feature, indx) => (
//                     <li key={indx} className="flex items-center gap-2 text-gray-600 text-sm">
//                         <Check size={16} className="text-green-500" />
//                         {feature}
//                     </li>
//                 ))}
//             </ul>

//             {/* Add to Cart Button */}
//             <button
//                 onClick={cartHandler}

//                 disabled={isInCart}
//                 className={`w-full py-3.5 rounded-full font-medium transition-all  text-white flex items-center justify-center gap-2 
//                     ${isInCart
//                         ? 'bg-linear-to-r from-green-600 to-emerald-600 cursor-default'
//                         : 'bg-linear-to-r from-violet-600 to-fuchsia-600 hover:brightness-105 active:scale-[0.985]'
//                     }`}
//             >
//                 {isInCart ? (
//                     <>
//                         <Check size={20} />
//                         Added to Cart
//                     </>
//                 ) : (
//                     <>
//                         <ShoppingCart size={20} />
//                         Add to Cart
//                     </>
//                 )}
//             </button>
//         </div >
//     );
// };

// export default ProductCard;




import { Check, ShoppingCart } from 'lucide-react';
import { toast } from 'react-toastify';


const ProductCard = ({ product, cart, setCart }) => {
    // Check if product is already in cart
    const isInCart = cart.some(item => item.id === product.id);

    const cartHandler = () => {
        if (!isInCart) {
            setCart(previous => [...previous, product]);

            // Show success toast when product is added
            toast.success(`${product.name} added to cart!`);
        } else {
            // Optional: Show info toast if trying to add already added item
            toast.info(`${product.name} is already in your cart!`);
        }
    };

    return (
        <div key={product.id} className="bg-white border-2 border-gray-50 rounded-2xl p-6 shadow-md relative">
            <div className={`badge badge-soft px-4 py-3 font-bold ${product.tag === 'Best Seller' ? 'badge-warning' : product.tag === 'New' ? 'badge-success' : product.tag === "Popular" ? "badge-primary" : 'badge-info'} absolute top-6 right-6`}>
                {product.tag}
            </div>

            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <img className='rounded-full p-2' src={product.icon} alt={product.name} />
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
            </h2>

            {/* Description */}
            <p className="line-clamp-2 text-gray-500 text-sm mb-4 leading-relaxed">
                {product.description}
            </p>

            {/* Price */}
            <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                <span className="text-gray-500 text-sm">
                    /{product.period === 'monthly' ? 'Mo' : product.period === 'yearly' ? 'Yr' : 'One-Time'}
                </span>
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

            {/* Add to Cart Button */}
            <button
                onClick={cartHandler}
                // disabled={isInCart}
                className={`w-full py-3.5 rounded-full font-medium transition-all text-white flex items-center justify-center gap-2 
                    ${isInCart
                        ? 'bg-linear-to-r from-green-600 to-emerald-600 cursor-default'
                        : 'bg-linear-to-r from-violet-600 to-fuchsia-600 hover:brightness-105 active:scale-[0.985]'
                    }`}
            >
                {isInCart ? (
                    <>
                        <Check size={20} />
                        Added to Cart
                    </>
                ) : (
                    <>
                        <ShoppingCart size={20} />
                        Add to Cart
                    </>
                )}
            </button>
        </div>
    );
};

export default ProductCard;