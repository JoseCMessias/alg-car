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
import { DescricaoMobi } from "./pages/Descricao/DescricaoMobi.jsx"
import { DescricaoGol } from "./pages/Descricao/DescricaoGol.jsx";
import { DescricaoJeep } from "./pages/Descricao/DescricaoJeep.jsx";
import { DescricaoLogan } from "./pages/Descricao/DescricaoLogan.jsx";
import { DescricaoMobiSair } from "./pages/Descricao/DescricaoMobiSair.jsx"
import { DescricaoGolSair } from "./pages/Descricao/DescricaoGolSair.jsx";
import { DescricaoJeepSair } from "./pages/Descricao/DescricaoJeepSair.jsx";
import { DescricaoLoganSair } from "./pages/Descricao/DescricaoLoganSair.jsx";

function App() {
    return (
        <Router>
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
                <Route path="/descricaomobi" element={<DescricaoMobi/>} />
                <Route path="/descricaogol" element={<DescricaoGol/>} />
                <Route path="/descricaojeep" element={<DescricaoJeep />} />
                <Route path="/descricaologan" element={<DescricaoLogan />} />

                <Route path="/descricaomobiSair" element={<DescricaoMobiSair/>} />
                <Route path="/descricaogolSair" element={<DescricaoGolSair/>} />
                <Route path="/descricaojeepSair" element={<DescricaoJeepSair />} />
                <Route path="/descricaologanSair" element={<DescricaoLoganSair />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
