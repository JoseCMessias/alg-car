import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import {VeiculosSair} from "../../components/Veiculos/VeiculosSair.jsx";
import { NavbarSair } from "../../components/Navbar/NavbarSair.jsx";
import Ofertas from "../../components/Oferta/Ofertas.jsx";

export const HomeSair = () => {
    return (
        <>
            <NavbarSair />
            <Carrousel />
            <VeiculosSair />
            <Ofertas />
        </>
    );
};
