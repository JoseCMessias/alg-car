import { Link } from "react-router-dom";
import React from 'react';
import ImgLogo from '/src/image/logo.png'
import ImgBusca from '/src/image/loupe.red.svg'
import "./Navbar.css"

const App = () => {
  return (
    <div>
        <div className="redCor"></div>
            <div className="header" id="header">
            <div className="logo_header">
                <img src={ImgLogo} alt="Minha Imagem"/>


                <div className="nav" id="nav">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/'>Sobre</Link>
                        </li>
                        <li>
                            <Link to='/'>Listar Veiculo</Link>
                        </li>
                        <li>
                            <Link to='/'>Adicionar Carro</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="botao-busca">
                <div className="pesq-botao" id="pesq-botao">
                    <input type="text" className="pesq-texto" placeholder="Pesquisar carros..." />
                    <a className="pesq-btn" href="">
                    <img className="loupe-red" src={ImgBusca} alt="" width="15px" height="15px" />
                    </a>
                </div>

                <div className="botao-acesso" id="botao-acesso">
                    <a href="#">Acessar</a>
                </div>
            </div>
      </div>
    </div>
  );
}

export default App;