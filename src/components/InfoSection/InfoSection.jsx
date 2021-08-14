import React from 'react';
import AvatarImg from './avatar.png';
import './InfoSection.css';
const InfoSection = () => {
    // Avatar
    // Info
        
    return (<div className="infoSection">
        <div className="avatar">
            <img src={AvatarImg} alt="avatar" />
        </div>
        <div className="info">
            <div className="actionButtons">
            <div>Username</div>
            <div>button</div>
            <div>svg button</div>
            </div>
             <div className="links">
                 <div className="">Link</div>
                 <div className="">Link</div>
                 <div className="">Link</div>
             </div>
             <div className="displayName">
                DisplayName
             </div>
        </div>
    </div>)
}

export default InfoSection;
