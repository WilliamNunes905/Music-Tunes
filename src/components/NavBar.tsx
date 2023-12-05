import { NavLink } from 'react-router-dom';
import './styles/NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <div className="nav-link">
        <NavLink className="menus" to="/">Login</NavLink>
        <NavLink className="menus" to="/search">Pesquisa</NavLink>
        <NavLink className="menus" to="/album/:id">Album</NavLink>
        <NavLink className="menus" to="/profile">Perfil</NavLink>
      </div>
    </nav>
  );
}
