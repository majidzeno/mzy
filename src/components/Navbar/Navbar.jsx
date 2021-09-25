import React from 'react';
import { NavLink } from "react-router-dom";

import Grid from './assets/Grid';
import Saved from './assets/Saved';
import Tagged from './assets/Tagged';
import Tv from './assets/Tv';

import './Navbar.css'
const Navbar = () => {
    
    return <div className='Nav'>
        <ul className='NavList'>
            <li className='NavListItem'>
                <NavLink to="/" exact>
                    <Grid  bindedClass="IconNavBar" />
                    Gallery
                </NavLink>
            </li>

            <li className='NavListItem'>
                <NavLink to="/todo">
                    <Tagged  bindedClass="IconNavBar" />
                    Todo
                </NavLink>
            </li>
        </ul>

    </div>
}

export default Navbar;
