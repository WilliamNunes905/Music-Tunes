import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Perfil from './pages/Perfil';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="/album/:id" element={ <Album /> } />
      <Route path="/profile" element={ <Perfil /> } />
    </Routes>
  );
}

export default App;
