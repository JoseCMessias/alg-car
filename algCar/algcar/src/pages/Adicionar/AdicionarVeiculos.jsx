import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const AdicionarVeiculos = ({}) => {
    const navigate = useNavigate();
    const [veiculo, setVeiculo] = useState({marca: '', modelo: ''})

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedVeiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
        storedVeiculos.push(veiculo);
        localStorage.setItem('veiculos', JSON.stringify(storedVeiculos));

        console.log("Veiculo adicionado com sucesso", veiculo);
        navigate('/listar');
    }

    return (
        <div>
            <h2> Adicionar Veículo </h2>
            <form onSubmit={handleSubmit} >
                <label>
                    Marca:
                    <input type="text" name="marca" value={veiculo.marca} onChange={(e) => setVeiculo({ ...veiculo, marca: e.target.value})}/>
                </label>
                <label>
                    Modelo:
                    <input type="text" name="modelo"  value={veiculo.modelo} onChange={(e) => setVeiculo({ ...veiculo, modelo: e.target.value})}/>
                </label>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}