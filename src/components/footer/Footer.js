import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  VideogameAsset
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
      <Link to={"/"} className="logo"><div>Owl House</div><VideogameAsset /></Link>
        <h4>Contacto</h4>
        <p>
          <strong>Direccion:</strong> Calle de prueba 1435, Buenos Aires
        </p>
        <p>
          <strong>Teléfono:</strong> +54 011 673433654
        </p>
        <p>
          <strong>Email:</strong> pruebacorreo@gmail.com
        </p>
        <div className="follow">
            <h4>Seguinos en nuestras redes</h4>
            <div className="icon">
                <i><Facebook /></i>
                <i><Twitter /></i>
                <i><Instagram /></i>
                <i><Pinterest /></i>
            </div>
        </div>
      </div>

      <div className="col">
        <h4>Nosotros</h4>
       <Link to={"/nosotros"}>Acerca de nosotros</Link>
       <Link to={"/envios"}>Información de Envíos</Link>
       <Link to={"/politicadeprivecidad"}>Politíca de Privacidad</Link>
       <Link to={"/terminosycondiciones"}>Terminos y Condiciones</Link>
       <Link to={"/contacto"}>Contacta con nosotros</Link>
      </div>

      <div className="col">
        <h4>Mi cuenta</h4>
       <Link to={"/login"}>Registrarse</Link>
       <Link to={"/carrito"}>Mi carrito</Link>
       <Link to={"/favoritos"}>Mis favoritos</Link>
       <Link to={"/contacto"}>Ayuda</Link>
      </div>

      <div className="col install">
        <h4>Instalá nuestra App</h4>
        <p>Desde App Store o Google Play</p>
        <div className="row"> 
            <img src="../../assets/img/app.jpg" alt="" /> 
            <img src="../../assets/img/play.jpg" alt="" />
        </div>
        <p>Todas las formas de pago</p>
        <img src="../../assets/img/pay.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
