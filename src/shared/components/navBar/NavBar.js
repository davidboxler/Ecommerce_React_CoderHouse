import "./NavBar.scss";
import Icon from "../cartWidgets/CardWidgets";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const pages = [
    { title: "Home", url: "/" },
    { title: "Nosotros", url: "/nosotros" },
    { title: "Contacto", url: "/contacto" }
  ];

  return (
    <section className="header">
      <Link to={"/"} className="logo">
        <FontAwesomeIcon icon={faGamepad} /> Hourglass house{" "}
      </Link>
      <nav className="navbar">
        {pages.map((page) => {
          return <Link to={page.url}>{page.title}</Link>;
        })}
        <Link to={"/electronica"}>Electronica</Link>
        <Link to={"/carrito"}><Icon /></Link>
      </nav>
    </section>
  );
}

export default Navbar;
