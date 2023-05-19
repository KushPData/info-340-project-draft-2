import React from 'react';

export function Header(props) {
    return (
        <header className="header-container">
            <div className="header-item">
                <img className="uw-logo" src='../../public/UW_Logo.png' alt="University of Washington logo" />
            </div>

            <div className="header-item">
                <h1 className="heading">Husky Event Finder</h1>
            </div>

            <div className="header-item">
                <img className="user-pic" src="../../public/user.jpg" alt="User Picture" />
            </div>
        </header>
    );
}