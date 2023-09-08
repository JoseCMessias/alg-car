import React from 'react';
import "./Footer.css"

const Footer = () => {

    return (
        <div>
            <div className="footer" id="footer">
                <p className="texto-ano">ALGCAR &copy; {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer;