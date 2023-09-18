import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adicionarVeiculo.css";

export const AdicionarVeiculos = ({}) => {
  const navigate = useNavigate();
  const [veiculo, setVeiculo] = useState({
    image: '', 
    marca: '',
    modelo: '',
    ano: '',
    portas: '',
    passageiros: '',
    portaMala: '',
    volante: '',
    ar: '',
    direcao: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedVeiculos = JSON.parse(localStorage.getItem("veiculos")) || [];
    storedVeiculos.push(veiculo);
    localStorage.setItem("veiculos", JSON.stringify(storedVeiculos));

    console.log("Veiculo adicionado com sucesso", veiculo);
    navigate("/listar");
  };

  return (
    <div className="form-adicionar">
      <div className="form-container">
        <h2 className="Titulo-adicionar"> Adicionar Veículo </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="add-grupo-img">
              <label className="add-label-img">
                Imagem (URL):
                <input
                  className="picture"
                  type="text"
                  name="image"
                  required
                  value={veiculo.image}
                  onChange={(e) => setVeiculo({ ...veiculo, image: e.target.value })}
                />
              </label>
              {veiculo.image && (
                <div className="adicionaIMG">
                  <img src={veiculo.image} alt="Imagem do veículo" />
                </div>
              )}
            </div>

            <div className="add-grupo">
                <label className="form-label">
                    Marca:
                    <input type="text" 
                        name="marca" 
                        required 
                        value={veiculo.marca} 
                        onChange={
                            (e) => setVeiculo({ ...veiculo, marca: e.target.value})
                        }/>
                </label>
                <label className="form-label">
                    Modelo:
                   <input type="text" 
                       name="modelo"  
                       required 
                       value={veiculo.modelo} 
                       onChange={
                            (e) => setVeiculo({ ...veiculo, modelo: e.target.value})
                        }/>
                </label>
                <label className="form-label">
                        Ano:
                        <input type="number" 
                        name="ano"  
                        value={veiculo.ano} 
                        onChange={
                            (e) => setVeiculo({ ...veiculo, ano: e.target.value})
                        }/>
                </label>
            </div>
            <div  className="add-grupo">
                <label className="form-label">
                        Portas:
                        <input type="number" 
                        name="portas"  
                        value={veiculo.portas} 
                        onChange={
                            (e) => setVeiculo({ ...veiculo, portas: e.target.value})
                        }/>
                </label>
                <label className="form-label">
                        Passageiros:
                        <input type="number" 
                        name="passageiros"  
                        value={veiculo.passageiros} 
                        onChange={
                            (e) => setVeiculo({ ...veiculo, passageiros: e.target.value})
                        }/>
                </label>
                <label className="form-label">
                        Ar condicionado:
                        <input type="text" 
                        name="ar"  
                        value={veiculo.ar} 
                        onChange={
                            (e) => setVeiculo({ ...veiculo, ar: e.target.value})
                        }/>
                </label>
            </div>
            <div className="form-button">
              <button type="submit">Adicionar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};