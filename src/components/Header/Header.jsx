import React from 'react';
import InstaLogo from './instagarm.png';
import Home from './home.png';
import Share from './share.png';
import Direction from './Directiom.png';
import Love from './heart.png';
import Avatar from './avatar.png';
import './Header.css';

const Header = () => {
    return (<div className="HeaderSecion">
        <div className="instaLogo">
            <img src={InstaLogo} alt="Logo" width="120px" />
        </div>
        <div className="Search">
            <input type="text" className="SearchBar" placeholder="search..."></input>
        </div>
        <div className="icons">
            <a href="" target="self">
                <img src={Home} className="icon" alt="Home" width="23px" /></a>

            <a href="" target="self">  <img src={Share} className="icon" alt="Share" width="23px" /></a>
            <a href="" target="self"> <img src={Direction} className="icon" alt="Direction" width="23px" /></a>
            <a href="" target="self">  <img src={Love} className="icon" alt="Love" width="23px" /></a>
            <a href="" target="self">  <img src={Avatar} className="icon avatarIcon" alt="Avatar" width="25px" /></a>

        </div>


    </div>)
}

export default Header;
