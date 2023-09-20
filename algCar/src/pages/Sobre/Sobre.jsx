import Perfil from "../../assets/perfil.svg";
import "./Sobre.css";
import { Navbar } from "../../components/Navbar/Navbar";

export const Sobre = () => {
    return (
        <div>
            <Navbar />
            <div className="body-sobre">
                <div className="container-sobre">
                    <h1 className="titulo-sobre">Sobre o Projeto</h1>
                    <div className="sobre-sobre">
                        <div className="perfil-sobre">
                            <img src={Perfil} alt="" />
                            <h2>José Messias</h2>
                            <p>Aluno & Autor</p>
                        </div>

                        <div className="text-sobre">
                            <p>
                                O site ALG CAR é o resultado de um projeto
                                proposto pelo curso da Alicerce Educação como
                                projeto final. Nesse empreendimento,
                                desenvolvemos um sistema voltado para o cliente,
                                que oferece funcionalidades essenciais, tais
                                como a capacidade de adicionar, listar, editar e
                                excluir informações.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
