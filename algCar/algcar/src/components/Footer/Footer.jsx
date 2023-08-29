import React from 'react';
import ImgDireitos from '/src/image/C.svg'
import "./Footer.css"

const Footer = () => {

    return (
        <div>
            <div className="footer" id="footer">
                <h1 className="texto-nome">ALGCAR</h1>
                <h1 className="texto-copyright">Copyright</h1>
                <img src={ImgDireitos} alt="direitos autorais" />
                <h1 className="texto-ano">2023</h1>
            </div>
        </div>
    )
}

export default Footer;