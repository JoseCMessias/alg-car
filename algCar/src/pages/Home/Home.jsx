import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import Veiculos from "../../components/Veiculos/Veiculos.jsx";
import Oferta from "../../components/Oferta/Ofertas.jsx";
import {Navbar} from "../../components/Navbar/Navbar.jsx";

export const Home = () => {
    return (
        <>
            <Navbar />
            <Carrousel />
            <Veiculos />
            <Oferta />
        </>
    );
};
