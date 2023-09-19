import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ListarVeiculos.css";
import { NavbarSair } from "../../components/Navbar/NavbarSair";

export const ListarVeiculos = ({}) => {
    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        const storedVeiculos =
            JSON.parse(localStorage.getItem("veiculos")) || [];
        setVeiculos(storedVeiculos);
    }, []);

    const handleRemoverVeiculo = (index) => {
        const updateVeiculo = veiculos.filter((_, i) => i !== index);
        localStorage.setItem("veiculos", JSON.stringify(updateVeiculo));
        setVeiculos(updateVeiculo);
    };

    return (
        <>
            <NavbarSair />
            <div className="container-listar-listar">
                <div className="container-listar">
                    <h2 className="titulo-listar">Listar Veiculos</h2>
                    <ul className="veiculo-ul">
                        {veiculos.map((veiculo, index) => (
                            <li className="veiculo-li" key={index}>
                                <div className="imput-file-listar">
                                    {veiculo.image && (
                                        <img src={veiculo.image} alt="" />
                                    )}
                                </div>

                                <div className="descricao-listar">
                                    <div className="listar-marca">
                                        {veiculo.marca}
                                    </div>
                                    <div className="listar-modelo">
                                        {veiculo.modelo}
                                    </div>
                                </div>

                                <div className="veiculo-editar-excluir">
                                    <div className="veiculo-editar-listar">
                                        <Link to={`/edit/${index}`}>
                                            <button>Editar</button>
                                        </Link>
                                    </div>

                                    <div className="veiculo-excluir-listar">
                                        <button
                                            onClick={() =>
                                                handleRemoverVeiculo(index)
                                            }
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};
