import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* PAGES */
import Home from './pages/Home'
import Idiomas from './pages/Idiomas';
import Entrar from './pages/Entrar';
import Cadastro from './pages/Cadastro'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/idiomas' element={<Idiomas />} />
        <Route path='/entrar' element={<Entrar />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
