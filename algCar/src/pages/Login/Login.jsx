import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logoImg from "../../assets/logo.svg";
import { Navbar } from "../../components/Navbar/Navbar";

export const Login = () => {
    const navigate = useNavigate();
    const [credenciais, setCredenciais] = useState({
        email: "",
        senha: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("evento", e);

        const storedUser = JSON.parse(localStorage.getItem("usuario"));
        if (
            storedUser.emailUsuario === credenciais.email &&
            storedUser.senhaUsuario === credenciais.senha
        ) {
            localStorage.setItem("isLogged", true);
            alert("Login bem sucedido");
            navigate("/homesair");
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="section-login">
                <div className="login">
                    <img src={logoImg} alt="imagem da logo" />

                    <form onSubmit={handleLogin}>
                        <div className="inputs">
                            <input
                                type="email"
                                name="email"
                                placeholder="seu email"
                                value={credenciais.email}
                                onChange={(e) =>
                                    setCredenciais({
                                        ...credenciais,
                                        email: e.target.value,
                                    })
                                }
                                autoFocus
                                required
                            />
                        </div>

                        <div className="inputs">
                            <input
                                type="password"
                                name="senha"
                                placeholder="sua senha"
                                value={credenciais.senha}
                                onChange={(e) =>
                                    setCredenciais({
                                        ...credenciais,
                                        senha: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        <input type="submit" value="entrar" />
                    </form>
                    <p>
                        Ainda não tem conta?{" "}
                        <Link to="/cadastro">Criar Conta</Link>
                    </p>
                </div>
            </div>
        </>
    );
};
