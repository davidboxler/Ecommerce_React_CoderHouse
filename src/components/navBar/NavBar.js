import './NavBar.css';
import '../cartWidgets/CardWidgets'
import Icon from '../cartWidgets/CardWidgets';

function Navbar() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="_blank" className="nav__logo">
          Ecommerce CoderHouse
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="_blank" className="nav__link active-link">
                Inicio
              </a>
            </li>
            <li className="nav__item">
              <a href="_blank" className="nav__link">
                Buscar
              </a>
            </li>
            <li className="nav__item">
              <a href="_blank" className="nav__link">
                Notificaciones
              </a>
            </li>
            <li className="nav__item">
              <a href="_blank" className="nav__link">
                Favoritos
              </a>
            </li>
            <li className="nav__item">
              <a href="_blank" className="nav__link">
                <Icon />
              </a>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
