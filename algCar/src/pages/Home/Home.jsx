import Carrousel from '../../components/Carrousel/Carrousel.jsx';
import Veiculos from '../../components/Veiculos/Veiculos.jsx';
import Oferta from '../../components/Oferta/Ofertas.jsx';
// import {ListarVeiculos} from '../Listar/ListarVeiculos.jsx';


export const Home = () => {

    return (
        <>
           <Carrousel /> 
           {/* <ListarVeiculos /> */}
           <Veiculos />
           <Oferta />
        </>
    )
}