import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import Veiculos from "../../components/Veiculos/Veiculos.jsx";
import { NavbarSair } from "../../components/Navbar/NavbarSair.jsx";
import Ofertas from "../../components/Oferta/Ofertas.jsx";

export const HomeSair = () => {
    return (
        <>
            <NavbarSair />
            <Carrousel />
            <Veiculos />
            <Ofertas />
        </>
    );
};
