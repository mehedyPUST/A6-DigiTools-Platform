import React from 'react';

const Cart = ({ cart, setCart }) => {
    console.log(cart)
    return (
        <div>

            {cart.map(item => <p>{item.price}</p>)}
        </div>
    );
};

export default Cart;