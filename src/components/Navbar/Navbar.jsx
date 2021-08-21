import React from 'react';
import Grid from './assets/Grid';
import Saved from './assets/Saved';
import Tagged from './assets/Tagged';
import Tv from './assets/Tv';

import './Navbar.css'
const Navbar = () => {
    return <div className='Nav'>
        <ul className='NavList'>
            <li className='NavListItem ActiveNavListItem'>
                <Grid  bindedClass="IconNavBar" />
                posts
            </li>
            <li className='NavListItem'>
                <Tv  bindedClass="IconNavBar" />
                igtv
            </li>
            <li className='NavListItem'>
                <Saved  bindedClass="IconNavBar" />
                saved
            </li>
            <li className='NavListItem'>
                <Tagged  bindedClass="IconNavBar" />
                tagged
            </li>
        </ul>

    </div>
}

export default Navbar;
