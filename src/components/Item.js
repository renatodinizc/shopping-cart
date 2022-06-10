import React from 'react';

function Item({src, alt, title, pricing, description}) {
    return (
        <div className='item'>
            <img src={src} alt={alt} />
            <h2>{title}</h2>
            <p>{pricing}</p>
            <h5>{description}</h5>
        </div>
    );
};

export default Item;