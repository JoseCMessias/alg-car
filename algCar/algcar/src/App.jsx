import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';


function App() {

  return (
      <Router>
        <Navbar />
          <Routes>
            <Route path='/'>Home</Route>
          </Routes>
      </Router>
  )
}

export default App
