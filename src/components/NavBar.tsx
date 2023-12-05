import { NavLink } from 'react-router-dom';
import styles from './styles/NavBar.module.css';

export default function NavBar() {
  return (
    <nav>
      <div className={ styles.navLink }>
        <NavLink className={ styles.menus } to="/">Login</NavLink>
        <NavLink className={ styles.menus } to="/search">Pesquisa</NavLink>
        <NavLink className={ styles.menus } to="/album/:id">Album</NavLink>
        <NavLink className={ styles.menus } to="/profile">Perfil</NavLink>
      </div>
    </nav>
  );
}
