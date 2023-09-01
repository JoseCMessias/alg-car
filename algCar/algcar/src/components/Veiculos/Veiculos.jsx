import React from 'react';
import './Veiculos.css';
import Gol from '/public/gol.svg'
import Jeep from '/public/jeep.svg'
import Mobi from '/public/mobi.svg'
import Renault from '/public/renault.svg'

function Veiculos() {
  return (
    <>
        <div className="titulo1">
            <h2>Veículos</h2>
        </div>
        
        <div className="frota">
        <div className="frota_1">
            <div className="carro-frota">
                <img className="img-frota" src={Mobi} alt="" />
                <div className="frota-descrocao">
                    <h3 className="h3-frota">FIAT MOBI</h3>
                    <button className="botao-frota">Ver mais</button>
                </div>
            </div>

            <div className="carro-frota">
                <img className="img-frota" src={Renault} alt="" />
                <div className="frota-descrocao">
                    <h3 className="h3-frota">RENAULT LOGAN</h3>
                    <button className="botao-frota">Ver mais</button>
                </div>
            </div>

            <div className="carro-frota">
                <img className="img-frota" src={Jeep} alt="" />
                <div className="frota-descrocao">
                    <h3 className="h3-frota">JEEP RENEGADE</h3>
                    <button className="botao-frota">Ver mais</button>
                </div>
            </div>

            <div className="carro-frota">
                <img className="img-frota" src={Gol} alt="" />
                <div className="frota-descrocao">
                    <h3 className="h3-frota">VW GOL</h3>
                    <button className="botao-frota">Ver mais</button>
                </div>
            </div>
        </div>

        <div className="frota_2">
            <div className="carro-frota">
                <img className="img-frota" src={Mobi} alt="" />
                <div className="frota-descrocao">
                    <h3 className="h3-frota">FIAT MOBI</h3>
                    <button className="botao-frota">Ver mais</button>
                </div>
            </div>

            <div className="carro-frota">
                <img className="img-frota" src={Renault} alt="" />
                <div className="frota-descrocao">
                    <h3 className="h3-frota">RENAULT LOGAN</h3>
                    <button className="botao-frota">Ver mais</button>
                </div>
            </div>

            <div className="carro-frota">
                <img className="img-frota" src={Jeep} alt="" />
                <div className="frota-descrocao">
                    <h3 className="h3-frota">JEEP RENEGADE</h3>
                    <button className="botao-frota">Ver mais</button>
                </div>
            </div>

            <div className="carro-frota">
                <img className="img-frota" src={Gol} alt="" />
                <div className="frota-descrocao">
                    <h3 className="h3-frota">VW GOL</h3>
                    <button className="botao-frota">Ver mais</button>
                </div>
            </div>
        </div>
        </div>
    </>
  );
}

export default Veiculos;