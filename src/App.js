import './App.css';
import Nav from './components/Nav';
import './assets/style/main.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Depoimentos from './pages/Depoimentos'
import Projetos from './pages/Projetos'
import Servicos from './pages/Servicos'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/contato' element={ <Contato />} />
        <Route path='/depoimentos' element={ <Depoimentos />} />
        <Route path='/servicos' element={ <Servicos />} />
        <Route path='/projetos' element={ <Projetos />} />
      </Routes>
    </div>
  );
}

export default App;
