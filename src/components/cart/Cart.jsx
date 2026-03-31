const Cart = ({ cart, setCart }) => {
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            {cart.length === 0 ? (
                <p>No products in cart</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div className="shadow-md space-y-2 bg-green-500">
                            <div className="flex gap-2">
                                <img class="w-5 h-5" src="/public/favicon.svg" alt="" />
                                <div>
                                    <p>{item.name} </p>
                                    <p className="bg-amber-500"> Price: {item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h3>Total: ${total}</h3>
                </>
            )}
        </div>
    );
};

export default Cart;