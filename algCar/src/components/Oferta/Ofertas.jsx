import React from "react";
import Oferta from "../../assets/oferta.svg";
import "./Ofertas.css";

function Ofertas() {
    return (
        <>
            <div className="titulo">
                <h2>Ofertas</h2>
            </div>

            <div className="oferta">
                <img className="img-oferta" src={Oferta} alt="" />
            </div>
        </>
    );
}

export default Ofertas;
