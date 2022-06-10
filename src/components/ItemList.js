import React from 'react';
import Item from './Item';
import ImagesArray from './ImagesArray';

function ItemList() {
    return (
        <div className='itemList'>
            <Item src={ImagesArray[0]} alt='alt text' title='title' pricing='$45' description='product description here' />
            <Item src={ImagesArray[1]} alt='alt text' title='title' pricing='$45' description='product description here' />
            <Item src={ImagesArray[2]} alt='alt text' title='title' pricing='$45' description='product description here' />
            <Item src={ImagesArray[3]} alt='alt text' title='title' pricing='$45' description='product description here' />
            <Item src={ImagesArray[4]} alt='alt text' title='title' pricing='$45' description='product description here' />
            <Item src={ImagesArray[5]} alt='alt text' title='title' pricing='$45' description='product description here' />
            <Item src={ImagesArray[5]} alt='alt text' title='title' pricing='$45' description='product description here' />
            <Item src={ImagesArray[5]} alt='alt text' title='title' pricing='$45' description='product description here' />
        </div>

    );
};

export default ItemList;