import React, { useState } from 'react';

function Item({src, id, alt, title, pricing, description, getItemToCart}) {
    const [count, setCount] = useState(0);

    function handleChange(event) {
        if (event.target.value < 0) {
            setCount(0);
        } else {
            setCount(event.target.value);
        };
    };

    function handleSubmission(event) {
        event.preventDefault();
        let newItem = {
                    title: title,
                    id: id,
                    image: {
                            src: src,
                            alt: alt
                            },
                    pricing: pricing,
                    description: description,
                    count: count
                    };
        getItemToCart(newItem);
        
    };

    return (
        <div className='item'>
            <img src={src} alt={alt} />
            <h2>{title}</h2>
            <p>${pricing}</p>
            <h5>{description}</h5>
            <form onSubmit={handleSubmission}>
                <button type='button' onClick={() => setCount(count - 1)}>-</button>
                <input type='number' value={count} onChange={handleChange} />
                <button type='button' onClick={() => setCount(count + 1)}>+</button>
                <button type='submit'>Add to cart</button>
            </form>
        </div>
    );
};

export default Item;