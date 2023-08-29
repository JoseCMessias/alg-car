
import { useState, useEffect } from "react";

export const ListarVeiculos = ({}) => {

    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        const storedVeiculos = JSON.parse(localStorage.getItem('veiculos')) || [];

        setVeiculos(storedVeiculos);
    }, []);

    return (
        <div>
            <h2>Listar Veiculos</h2>
            <ul>
                {veiculos.map((veiculo, index) => (
                    <li key={index}>
                        Marca: {veiculo.marca}, Modelo: {veiculo.modelo}
                    </li>
                ))}
            </ul>
        </div>
    )
}


