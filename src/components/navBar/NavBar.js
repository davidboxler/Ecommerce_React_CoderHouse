import "./NavBar.scss";
import "../cartWidgets/CardWidgets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import Icon from "../cartWidgets/CardWidgets";
import search from "../../assets/ic_Search.png";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav_header_menu">
          <nav className="nav_header">
            <a href="_blank">Creá tu cuenta</a>
            <a href="_blank">Ingresá</a>
            <a href="_blank">Mis compras</a>
            <a href="_blank">
              <Icon />
            </a>
          </nav>
        </div>
        <div className="nav_logo">
          <img src={Logo} alt="logo mercado libre"></img>
        </div>
        <form className="form_search">
          <input
            type="text"
            maxLength="120"
            placeholder="Buscar productos, marcas y más…"
            className="bar_search"
          ></input>
          <button className="btn_search">
            <img src={search} alt="icono lupa buscar"></img>
          </button>
        </form>
        <div className="nav_menu">
          <ul className="nav_menu_list">
            <li className="nav_menu_item item">
              <a href="_blank" className="item_nav">
                Categorías
              </a>
            </li>
            <li className="nav_menu_item">
              <a href="_blank" className="item_nav">
                Ofertas
              </a>
            </li>
            <li className="nav_menu_item">
              <a href="_blank" className="item_nav">
                Historial
              </a>
            </li>
            <li className="nav_menu_item">
              <a href="_blank" className="item_nav">
                Supermercado
              </a>
            </li>
            <li className="nav_menu_item">
              <a href="_blank" className="item_nav">
                Moda
              </a>
            </li>
            <li className="nav_menu_item">
              <a href="_blank" className="item_nav">
                Vender
              </a>
            </li>
            <li className="nav_menu_item">
              <a href="_blank" className="item_nav">
                Ayuda
              </a>
            </li>
          </ul>
        </div>
        <a className="nav_picture">
          <FontAwesomeIcon icon={faPrint} />
          <span className="mr-10">Comprá tu Point y QR a $189</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
