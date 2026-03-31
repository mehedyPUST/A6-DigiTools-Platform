import { FiShoppingBag } from 'react-icons/fi';

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center border border-purple-500 rounded-xl">
            <div className="bg-gray-100 rounded-full p-6 mb-6">
                <FiShoppingBag className="w-12 h-12 text-gray-400" />
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Your Cart is Empty
            </h2>

            <p className="text-gray-500 mb-6 max-w-md">
                Looks like you haven't added any items to your cart yet.
                Start shopping to add items!
            </p>


        </div>
    );
};

export default EmptyCart;