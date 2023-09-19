import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListarVeiculos } from "./pages/Listar/ListarVeiculos.jsx";
import { AdicionarVeiculos } from "./pages/Adicionar/AdicionarVeiculos.jsx";
import { EditarVeiculos } from "./pages/Editar/EditarVeiculos.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { HomeSair } from "./pages/Home/HomeSair.jsx";
import { Sobre } from "./pages/Sobre/Sobre.jsx";
import { SobreSair } from "./pages/Sobre/SobreSair.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Cadastro } from "./pages/Cadastro/Cadastro.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/homesair" element={<HomeSair />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/sobreSair" element={<SobreSair />} />
                <Route path="/listar" element={<ListarVeiculos />} />
                <Route path="/add" element={<AdicionarVeiculos />} />
                <Route path="/edit/:index" element={<EditarVeiculos />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
