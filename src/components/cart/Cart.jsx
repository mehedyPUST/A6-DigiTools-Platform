// import React from 'react';

// const Cart = ({ cart, setCart }) => {
//     console.log(cart)
//     return (
//         <div>
//             {
//                 cart.length === 0 ? {<p>no product cart empty<p/>} : { cart.map(item => <p>{item.price}</p>) }
//             }

//         </div>
//     );
// };

// export default Cart;


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
                        <div key={item.id}>
                            <p>Price: ${item.price}</p>
                            <button className="btn btn-error" onClick={() => removeFromCart(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <h3>Total: ${total}</h3>
                </>
            )}
        </div>
    );
};

export default Cart;