import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        About
      </NavLink>
      <NavLink
        to="/watchlist"
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        Watchlist
      </NavLink>
    </nav>
  );
};

export default Header;
