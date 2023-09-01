import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Carrousel from './components/Carrousel/Carrousel.jsx'
import {ListarVeiculos} from './pages/Listar/ListarVeiculos.jsx';
import {AdicionarVeiculos} from './pages/Adicionar/AdicionarVeiculos.jsx';
import Veiculos from './components/Veiculos/Veiculos.jsx'
import Ofertas from './components/Oferta/Ofertas.jsx'

function App() {

  return (
      <Router>
        <Navbar />
        <Carrousel />

          <Routes>
            <Route path='/listar' element={<ListarVeiculos />} />
            <Route path='/add' element={<AdicionarVeiculos />} />
          </Routes>

        <Veiculos />
        <Ofertas />
        <Footer />
      </Router>
  )
}

export default App
