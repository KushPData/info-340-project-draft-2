import React from 'react';

export function Footer(props) {
    return (
        <footer>
            <div className="footer-container">
                <p><a href="mailto:contact@hef.uw.edu"><span className="material-icons">email: </span>contact@hef.uw.edu</a></p>
                <p><a href="tel:206-532-6703"><span className="material-icons">phone: </span>206-532-6703</a></p>
                <p>&copy; University of Washington 2023</p>
            </div>
        </footer>
    );
}