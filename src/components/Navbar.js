import React from 'react';
import FurnitureLogo from '../images/furnitures.png';
import { useNavigate } from 'react-router-dom';


function Navbar() {
    let navigate = useNavigate();

    return(
        <div className='navbar'>
            <div className='logo' onClick={() => navigate('../home')} >
                <img src={FurnitureLogo} alt='furniture shop logo'/>
                <h1>Myshop</h1>
            </div>
            <button onClick={() => navigate('../shop')}>Shop</button>
            <button onClick={() => navigate('../about')}>About</button>
        </div>
    );
};

export default Navbar;