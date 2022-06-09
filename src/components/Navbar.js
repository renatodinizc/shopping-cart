import React from 'react';
import FurnitureLogo from '../images/furnitures.png';


function Navbar() {
    return(
        <div className='navbar'>
            <div className='logo'>
                <img src={FurnitureLogo} />
                <h1>Myshop</h1>
            </div>
            <button>Shop</button>
            <button>About</button>

        </div>

    );
};

export default Navbar;