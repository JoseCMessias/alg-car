import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

export const ListarVeiculos = ({}) => {

    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        const storedVeiculos = JSON.parse(localStorage.getItem('veiculos')) || [];

        setVeiculos(storedVeiculos);
    }, []);

    const handleRemoverVeiculo = (index) => {
        const updateVeiculo = veiculos.filter((_, i) => i !== index);
        localStorage.setItem('veiculos', JSON.stringify(updateVeiculo));
        setVeiculos(updateVeiculo);
    }

    return (
        <div>
            <h2>Listar Veiculos</h2>
            <ul>
                {veiculos.map((veiculo, index) => (
                    <li key={index}>
                        {/* {marca: '', modelo: '', ano: '', portas: '', passageiros: '', portaMala: '', volante: '', ar: '', direcao: ''} */}

                        Marca: {veiculo.marca}, 
                        Modelo: {veiculo.modelo}, 

                        <Link to={`/edit/${index}`}>
                            <button>Editar</button>
                        </Link>
                        <button onClick={() => handleRemoverVeiculo(index)}>
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


