import EmptyCart from "./EmptyCart";

const Cart = ({ cart, setCart }) => {
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const total = (cart.reduce((sum, item) => sum + item.price, 0)).toFixed(2);

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-center text-xl font-bold mb-2">Your Cart</h2>
            {cart.length === 0 ? (
                <EmptyCart></EmptyCart>
            ) : (
                <div className="space-y-4">
                    {cart.map(item => (
                        <div key={item.id} className="shadow-md  bg-green-50 rounded-md p-3 flex items-center justify-between">
                            <div className="flex gap-2 items-center">
                                <img className="w-10 h-10" src={item.icon} alt={item.name} />
                                <div>
                                    <p>{item.name}</p>
                                    <p>Price: {item.price}</p>

                                </div>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}
                                className="btn bg-linear-to-r from-red-400  to-red-600 rounded-4xl text-white"> Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${total}</h3>
                    <div>
                        <button onClick={() => setCart([])} className="btn">fghfghf</button>
                    </div>
                </div>

            )
            }

        </div >
    );
};

export default Cart;