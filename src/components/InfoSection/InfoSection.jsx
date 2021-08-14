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
                 
                 <div className="">
                 <a href="" target="self"><b>384</b> posts</a>
                 </div>

                 <div className="">
                 <a href="" target="self"><b>582</b> followers</a>
                 </div>

                 <div className="">
                 <a href="" target="self"><b>929</b> folowing</a>
                 </div>

             </div>
             <div className="displayName">
               <h3>Yara Refaee</h3>
             </div>
        </div>
    </div>)
}

export default InfoSection;
