import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './EditarVeiculos.css';

export const EditarVeiculos = () => {
    const { index } = useParams();
    const navigate = useNavigate();
    const [veiculo, setVeiculo] = useState({image: '', marca: '', modelo: ''});

    useEffect(() => {
        const storedveiculo = JSON.parse(localStorage.getItem('veiculos')) || [];
        if(storedveiculo[index]){
            setVeiculo(storedveiculo[index]);
        }
    }, [index]);

    const handleImg = (event) => {
        addEventListener(event.target.value);
        console(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedveiculo = JSON.parse(localStorage.getItem('veiculos')) || [];
        storedveiculo[index] = veiculo;
        localStorage.setItem('veiculos', JSON.stringify(storedveiculo));

        console.log("Veículo editado: ", veiculo);
        navigate('/listar');
    }

    return (
            <div className="form-editar">
                <div className="form-container-editar">
                    <h2 className="Titulo-editar"> Editar Veículo </h2>
                    <form onSubmit={handleSubmit} >
                        <div className="form-inputs-editar">

                        <div className="editar-grupo" onSubmit={handleImg}>
                            <label className="form-label-editar" value={veiculo.image} onChange={
                                (e) => setVeiculo({...veiculo, image: e.target.value})}>
                                <input type="file"/>
                            </label>
                        </div>

                            <div className="editar-grupo">
                                <label className="form-label-editar">
                                    Marca:  
                                    <input type="text" value={veiculo.marca} onChange={
                                        (e) => setVeiculo({ ...veiculo, marca: e.target.value})}/>
                                </label>

                                <label className="form-label-editar">
                                    Modelo:
                                    <input type="text" value={veiculo.modelo} onChange={
                                        (e) => setVeiculo({ ...veiculo, modelo: e.target.value})}/>
                                </label>

                                <label className="form-label-editar">
                                    Ano:
                                    <input type="text" value={veiculo.ano} onChange={
                                        (e) => setVeiculo({ ...veiculo, ano: e.target.value})}/>
                                </label>
                            </div>
                        
                            <div  className="editar-grupo">
                                <label className="form-label-editar">
                                    Portas:
                                    <input type="text" value={veiculo.portas} onChange={
                                        (e) => setVeiculo({ ...veiculo, portas: e.target.value})}/>
                                </label>

                                <label className="form-label-editar">
                                    Passageiros:
                                    <input type="text" value={veiculo.passageiros} onChange={
                                        (e) => setVeiculo({ ...veiculo, passageiros: e.target.value})}/>
                                </label>

                                <label className="form-label-editar">
                                    Porta Mala:
                                    <input type="text" value={veiculo.portaMala} onChange={
                                        (e) => setVeiculo({ ...veiculo, portaMala: e.target.value})}/>
                                </label>
                            </div>

                            <div  className="editar-grupo">
                                <label className="form-label-editar">
                                    Automático:
                                    <input type="text"  value={veiculo.volante} onChange={
                                        (e) => setVeiculo({ ...veiculo, volante: e.target.value})}/>
                                </label>

                                <label className="form-label-editar">
                                    Ar condicionado:
                                    <input type="text" value={veiculo.ar} onChange={
                                        (e) => setVeiculo({ ...veiculo, ar: e.target.value})}/>
                                </label>

                                <label className="form-label-editar">
                                    Direção:
                                    <input type="text" value={veiculo.direcao} onChange={
                                        (e) => setVeiculo({ ...veiculo, direcao: e.target.value})}/>
                                </label>
                            </div>

                            <div className="form-button-editar">
                                <button type="submit">Salvar</button>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    );
}