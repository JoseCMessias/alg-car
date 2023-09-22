import React from "react";
import "./Veiculos.css";
import Gol from "../../assets/gol.svg";
import Jeep from "../../assets/jeep.svg";
import Mobi from "../../assets/mobi.svg";
import Renault from "../../assets/renault.svg";
import { Link } from "react-router-dom";

export const VeiculosSair = () => {
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
                            <button className="botao-frota">
                                <Link to="/descricaomobiSair">Ver mais</Link>
                            </button>
                        </div>
                    </div>

                    <div className="carro-frota">
                        <img className="img-frota" src={Renault} alt="" />
                        <div className="frota-descrocao">
                            <h3 className="h3-frota">RENAULT LOGAN</h3>
                            <button className="botao-frota">
                                <Link to="/descricaologanSair">Ver mais</Link>
                            </button>
                        </div>
                    </div>

                    <div className="carro-frota">
                        <img className="img-frota" src={Jeep} alt="" />
                        <div className="frota-descrocao">
                            <h3 className="h3-frota">JEEP RENEGADE</h3>
                            <button className="botao-frota">
                                <Link to="/descricaojeepSair">Ver mais</Link>
                            </button>
                        </div>
                    </div>

                    <div className="carro-frota">
                        <img className="img-frota" src={Gol} alt="" />
                        <div className="frota-descrocao">
                            <h3 className="h3-frota">VW GOL</h3>
                            <button className="botao-frota">
                                <Link to="/descricaogolSair">Ver mais</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="frota_2">
                    <div className="carro-frota">
                        <img className="img-frota" src={Mobi} alt="" />
                        <div className="frota-descrocao">
                            <h3 className="h3-frota">FIAT MOBI</h3>
                            <button className="botao-frota">
                                <Link to="/descricaomobiSair">Ver mais</Link>
                            </button>
                        </div>
                    </div>

                    <div className="carro-frota">
                        <img className="img-frota" src={Renault} alt="" />
                        <div className="frota-descrocao">
                            <h3 className="h3-frota">RENAULT LOGAN</h3>
                            <button className="botao-frota">
                                <Link to="/descricaologanSair">Ver mais</Link>
                            </button>
                        </div>
                    </div>

                    <div className="carro-frota">
                        <img className="img-frota" src={Jeep} alt="" />
                        <div className="frota-descrocao">
                            <h3 className="h3-frota">JEEP RENEGADE</h3>
                            <button className="botao-frota">
                                <Link to="/descricaojeepSair">Ver mais</Link>
                            </button>
                        </div>
                    </div>

                    <div className="carro-frota">
                        <img className="img-frota" src={Gol} alt="" />
                        <div className="frota-descrocao">
                            <h3 className="h3-frota">VW GOL</h3>
                            <button className="botao-frota">
                                <Link to="/descricaogolSair">Ver mais</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

 
