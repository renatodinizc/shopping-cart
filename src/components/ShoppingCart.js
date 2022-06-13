import React, { useState } from 'react';

function ShoppingCart({cart}) {
    return (
        <>
            {cart.map(item => (
                <div className='cartItem'>
                    <img src={item.image.src} alt={item.image.alt} />
                    <p>{item.count}</p>
                    <p>{item.title}</p>
                    <p>{item.pricing}</p>
                </div>
            ))}
        </>
    );
};

export default ShoppingCart;