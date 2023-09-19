import { Link } from "react-router-dom";
import React from "react";
import ImgLogo from "/src/assets/logo.svg";
import ImgBusca from "/src/assets/loupe.red.svg";
import "./Navbar.css";

export const NavbarSair = () => {
    return (
        <div>
            <div className="redCor"></div>
            <div className="header" id="header">
                <div className="logo_header">
                    <Link to='/homesair'><img src={ImgLogo} alt="Imagem Logo" /></Link>

                    <div className="nav" id="nav">
                        <ul>
                            <li>
                                <Link to="/homesair">Home</Link>
                            </li>
                            <li>
                                <Link to="/sobresair">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/listar">Listar Carros</Link>
                            </li>
                            <li>
                                <Link to="/add">Adicionar Carros</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="botao-busca">
                    <div className="pesq-botao" id="pesq-botao">
                        <input
                            type="seaech"
                            className="pesq-texto"
                            placeholder="Pesquisar carros..."
                        />
                        <a className="pesq-btn" href="#">
                            <img
                                className="loupe-red"
                                src={ImgBusca}
                                alt=""
                                width="15px"
                                height="15px"
                            />
                        </a>
                    </div>

                    <div className="botao-acesso" id="botao-acesso">
                        <ul>
                            <li>
                                <Link to="/">Sair</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
