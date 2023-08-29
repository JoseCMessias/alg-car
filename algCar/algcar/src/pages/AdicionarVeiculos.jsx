import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './adicionarVeiculo.css'


export const AdicionarVeiculos = ({}) => {
    const navigate = useNavigate();
    const [veiculo, setVeiculo] = useState({marca: '', modelo: ''})

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedVeiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
        storedVeiculos.push(veiculo);
        localStorage.setItem('veiculos', JSON.stringify(storedVeiculos));

        console.log("Veiculo adicionado com sucesso", veiculo);
        navigate('/');
    }

    return (
        <div className="form-adicionar">
            <h2> Adicionar Veículo </h2>
            <form onSubmit={handleSubmit} >
                <label className="label-adicionar">
                    Marca:
                    <input type="text" name="marca" value={veiculo.marca} onChange={(e) => setVeiculo({ ...veiculo, marca: e.target.value})}/>
                </label>
                <br />
                <label className="label-adicionar">
                    Modelo:
                    <input type="text" name="modelo"  value={veiculo.modelo} onChange={(e) => setVeiculo({ ...veiculo, modelo: e.target.value})}/>
                </label>
                <br />
                <button className="botao-adicionat" type="submit">Adicionar Veículo</button>
            </form>
        </div>
    )
}