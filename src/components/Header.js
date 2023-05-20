import React from 'react';
import UWLogo from '../images/UW_Logo.png';
import ProfilePicture from '../images/user.jpg'

export function Header(props) {
    return (
        <header className="header-container">
            <div className="header-item">
                <img className="uw-logo" src={UWLogo} alt="University of Washington logo" />
            </div>

            <div className="header-item">
                <h1 className="heading">Husky Event Finder</h1>
            </div>

            <div className="header-item">
                <img className="user-pic" src={ProfilePicture} alt="User Picture" />
            </div>
        </header>
    );
}