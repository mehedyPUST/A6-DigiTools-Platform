import EmptyCart from "./EmptyCart";
import { toast } from 'react-toastify';
const Cart = ({ cart, setCart }) => {
    const removeFromCart = (id, name) => {
        setCart(cart.filter(item => item.id !== id));
        toast.error(`${name} removed from cart`)
    };

    const total = (cart.reduce((sum, item) => sum + item.price, 0)).toFixed(2);
    const checkOutHandler = () => {
        toast.success('Order Placed Successfully')
        setCart([])
    }


    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-center text-xl font-bold mb-2">Your Cart</h2>
            {cart.length === 0 ? (
                <EmptyCart></EmptyCart>
            ) : (
                <div className="space-y-4   p-5 ">
                    {cart.map(item => (
                        <div key={item.id} className="shadow-xl border border-purple-600  bg-white rounded-md py-4 px-5 flex items-center justify-between">
                            <div className="flex gap-2 items-center">
                                <img className="w-10 h-10 border border-purple-500 rounder-md" src={item.icon} alt={item.name} />
                                <div>
                                    <p>{item.name}</p>
                                    <p>Price: {item.price}</p>

                                </div>
                            </div>
                            <button onClick={() => removeFromCart(item.id, item.name)}
                                className=" text-[#FF3980]"> Remove</button>
                        </div>
                    ))}
                    <div className="flex justify-between items-center">
                        <h3 className="text-md font-bold ">Total: </h3>
                        <h3 className="text-md font-bold ">${total} </h3>
                    </div>
                    <div>
                        <button onClick={checkOutHandler} className="btn w-full  bg-linear-to-r from-purple-500 to-purple-700 text-white rounded-full "> Proceed To Checkout</button>
                    </div>
                </div>

            )
            }

        </div >
    );
};

export default Cart;