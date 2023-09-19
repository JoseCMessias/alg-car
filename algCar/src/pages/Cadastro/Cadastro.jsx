import React, { useState } from "react";
import "./Cadastro.css";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

export const Cadastro = () => {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        emailUsuario: "",
        nomeUsuario: "",
        senhaUsuario: "",
    });

    const handleCriarConta = (e) => {
        e.preventDefault();
        localStorage.setItem("usuario", JSON.stringify(usuario));
        navigate("/login");
    };

    return (
        <>
            <Navbar />
            <div>
                <div className="section-cadastro">
                    <div className="cadastro">
                        <img src={logoImg} alt="imagem da logo" />

                        <form onSubmit={handleCriarConta}>
                            <div className="inputs-cadastro">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="seu nome"
                                    autoFocus
                                    value={usuario.nomeUsuario}
                                    onChange={(e) =>
                                        setUsuario({
                                            ...usuario,
                                            nomeUsuario: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>

                            <div className="inputs-cadastro">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="seu email"
                                    autoFocus
                                    value={usuario.emailUsuario}
                                    onChange={(e) =>
                                        setUsuario({
                                            ...usuario,
                                            emailUsuario: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>

                            <div className="inputs-cadastro">
                                <input
                                    type="password"
                                    name="senha"
                                    placeholder="crie uma senha"
                                    value={usuario.senhaUsuario}
                                    onChange={(e) =>
                                        setUsuario({
                                            ...usuario,
                                            senhaUsuario: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>

                            <input
                                type="submit"
                                value="Criar"
                                onClick={handleCriarConta}
                            />
                        </form>

                        <p>
                            Voltar à página de Login?{" "}
                            <Link to="/login">Clique aqui!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
