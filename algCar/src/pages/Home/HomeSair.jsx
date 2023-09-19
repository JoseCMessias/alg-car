import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import Veiculos from "../../components/Veiculos/Veiculos.jsx";
import Oferta from "../../components/Oferta/Ofertas.jsx";
import { NavbarSair } from "../../components/Navbar/NavbarSair.jsx";
// import { ListarVeiculos } from "../Listar/ListarVeiculos.jsx";

export const HomeSair = () => {
    return (
        <>
            <NavbarSair />
            <Carrousel />
            <Veiculos />
            <Oferta />
            {/* <ListarVeiculos /> */}
        </>
    );
};
