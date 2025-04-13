import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/screens/Login';
import Main from './components/screens/Main';
import Abastecimento from './components/screens/Abastecimento';
import Usuario from './components/screens/Usuario';
import Maquinario from './components/screens/Maquinario';
import Relatorio from './components/screens/Relatorio';
import Fornecedor from './components/screens/Fornecedor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/abastecimento" element={<Abastecimento />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/maquinario" element={<Maquinario />} />
        <Route path="/relatorio" element={<Relatorio />} />
        <Route path="/fornecedor" element={<Fornecedor />} />
      </Routes>
    </Router>
  );
}

export default App;
