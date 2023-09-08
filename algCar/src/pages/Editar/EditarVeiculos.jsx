import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const EditarVeiculos = () => {
    const { index } = useParams();
    const navigate = useNavigate();
    const [veiculo, setveiculo] = useState({ marca: '', modelo: ''});

    useEffect(() => {
        const storedveiculo = JSON.parse(localStorage.getItem('veiculos')) || [];
        if(storedveiculo[index]){
            setveiculo(storedveiculo[index]);
        }
    }, [index]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedveiculo = JSON.parse(localStorage.getItem('veiculos')) || [];
        storedveiculo[index] = veiculo;
        localStorage.setItem('veiculos', JSON.stringify(storedveiculo));

        console.log("Veículo editado: ", veiculo);
        navigate('/');
    }


    return (
        <div>
            <h2>Editar Veículo</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Marca:
                </label>
                <input 
                    type="text" 
                    value={veiculo.marca} 
                    onChange={(e) => setveiculo({ ...veiculo, marca: e.target.value})} 
                />
                <br/>
                <label>
                    Modelo:
                </label>
                <input 
                    type="text" 
                    value={veiculo.modelo} 
                    onChange={(e) => setveiculo({ ...veiculo, modelo: e.target.value})} 
                />
                <br/>
                <button type="submit">Salvar alterações</button>
            </form>
        </div>
    );
}