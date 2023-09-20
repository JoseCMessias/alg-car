import "./Descricao.css";
import fotoLogan from "../../assets/renault.svg";
import { Navbar } from "../../components/Navbar/Navbar";
import portaIMG from "../../assets/portas.svg";
import passIMG from "../../assets/passageiros.svg";
import cambioIMG from "../../assets/cambio.svg";
import arIMG from "../../assets/ar.svg";
import malaIMG from "../../assets/mala.svg";
import direcaoIMG from "../../assets/direcao.svg";

export const DescricaoLogan = () => {
    return (
        <>
            <Navbar />
            <div className="container-descricao-descricao">
                <div className="carro-image-descricao">
                    <h2>RENAULT LOGAN</h2>

                    <div className="img-input-descricao">
                        <div className="image-descricao">
                            <img src={fotoLogan} alt="Renault Logan" />

                            <div className="carro-descricao">
                                <div className="grupo-descricao">
                                    <div className="descricao">
                                        <img src={portaIMG} alt="" />
                                        <p>4 Portas</p>
                                    </div>

                                    <div className="descricao">
                                        <img src={passIMG} alt="" />
                                        <p>5 Passageiros</p>
                                    </div>

                                    <div className="descricao">
                                        <img src={direcaoIMG} alt="" />
                                        <p>Manual</p>
                                    </div>
                                </div>

                                <div className="grupo-descricao-barra   ">
                                    {" "}
                                </div>

                                <div className="grupo-descricao">
                                    <div className="descricao">
                                        <img src={malaIMG} alt="" />
                                        <p>1 Mala</p>
                                    </div>

                                    <div className="descricao">
                                        <img src={arIMG} alt="" />
                                        <p>Ar Condicionado</p>
                                    </div>

                                    <div className="descricao">
                                        <img src={cambioIMG} alt="" />
                                        <p>Hidráulica</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="botao-desc-descricao">
                            <input type="submit" value="Reservar esse Carro" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
