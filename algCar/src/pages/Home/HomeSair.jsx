import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import Veiculos from "../../components/Veiculos/Veiculos.jsx";
import { NavbarSair } from "../../components/Navbar/NavbarSair.jsx";

export const HomeSair = () => {
    return (
        <>
            <NavbarSair />
            <Carrousel />
            <Veiculos />
        </>
    );
};
