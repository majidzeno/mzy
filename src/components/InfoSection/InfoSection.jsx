import React from 'react';
import AvatarImg from './avatar.png';
import SettingIcon from './setting.js';
import './InfoSection.css';
const InfoSection = () => {
    return (<div className="infoSection">
        <div className="avatar">
            <img src={AvatarImg} alt="avatar" />
        </div>
        <div className="info">
            <div className="actionButtons">
                <div className="userName">Username</div>
                <div>
                    <button className="editButton">
                        Edit Profile
                    </button>
                </div>
                <div>
                    <a className="settingButton" href="#">
                        <SettingIcon />
                    </a>
                </div>
            </div>
            <div className="links">
                <a className="link" href="#" ><b>384</b> posts</a>
                <a className="link" href="#" ><b>582</b> followers</a>
                <a className="link" href="#" ><b>929</b> folowing</a>
            </div>
            <div className="displayName">
                <h3>Yara Refaee</h3>
            </div>
        </div>
    </div>)
}

export default InfoSection;
