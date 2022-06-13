import React, { useState } from 'react';
import Item from './Item';
import ImagesArray from './ImagesArray';
import ShoppingCart from './ShoppingCart';

function ItemList() {
    const [cart, setCart] = useState([]);
    const [showingCart, setShowingCart] = useState(false);

    function getItemToCart(newItem) {
        if (cart.some(item => item.id == newItem.id)) {
            const editedCart = cart.map(item => {
                if (item.id === newItem.id) {
                    item.count = item.count + newItem.count;
                    return item;
                } else {
                    return item;
                };
            });
            setCart(editedCart);

        } else {
            setCart([...cart, newItem]);
        };

    };

    return (
        <>
            <div className='cart'>
                <button onClick={() => setShowingCart(true)}>Cart - {cart.length}</button>
                {showingCart &&
                    <ShoppingCart cart={cart} />
                }
            </div>
            <div className='itemList'>
                <Item src={ImagesArray[0]} id={1} alt='alt text' title='cama1' pricing='$10' description='product description here' getItemToCart={getItemToCart} />
                <Item src={ImagesArray[1]} id={2} alt='alt text' title='cama2' pricing='$15' description='product description here' getItemToCart={getItemToCart} />
                <Item src={ImagesArray[2]} id={3} alt='alt text' title='cama2' pricing='$20' description='product description here' getItemToCart={getItemToCart} />
                <Item src={ImagesArray[3]} id={4} alt='alt text' title='cadeira1' pricing='$25' description='product description here' getItemToCart={getItemToCart} />
                <Item src={ImagesArray[4]} id={5} alt='alt text' title='cadeira2' pricing='$45' description='product description here' getItemToCart={getItemToCart} />
                <Item src={ImagesArray[5]} id={6} alt='alt text' title='espremedor' pricing='$45' description='product description here' getItemToCart={getItemToCart} />
                <Item src={ImagesArray[5]} id={7} alt='alt text' title='espremedor' pricing='$45' description='product description here' getItemToCart={getItemToCart} />
                <Item src={ImagesArray[5]} id={8} alt='alt text' title='espremedor' pricing='$45' description='product description here' getItemToCart={getItemToCart} />
            </div>
        </>

    );
};

export default ItemList;