import React, { useState } from 'react';

function ShoppingCart({cart}) {

    const subtotal = (cart.map(item => item.pricing * item.count)).reduce(
        (totalSum, itemSum) => totalSum + itemSum
    );
    
    return (
        <>
            <div>
                {cart.map(item => (
                    <div className='cartItem'>
                        <img src={item.image.src} alt={item.image.alt} />
                        <p>{item.count}</p>
                        <p>{item.title}</p>
                        <p>$ {item.pricing}</p>
                    </div>
                ))}
            </div>
            <h3>Subtotal ${subtotal}</h3>
            <button>Check Out</button>
        </>
    );
};

export default ShoppingCart;