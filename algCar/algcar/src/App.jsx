import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx'
import {ListarVeiculos} from './pages/Listar/ListarVeiculos.jsx';
import {AdicionarVeiculos} from './pages/Adicionar/AdicionarVeiculos.jsx';

function App() {

  return (
      <Router>
        <Navbar />
          <Routes>
            <Route path='/listar' element={<ListarVeiculos />} />
            <Route path='/add' element={<AdicionarVeiculos />} />
          </Routes>

        <Footer />
      </Router>
  )
}

export default App
