import React from "react";
import "./Footer.scss";
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material";

export const Footer = () => {
  return (
    <div className="container-footer">
      <div className="left-footer">
        <h1 className="logo">Owl House</h1>
        <div className="desc-footer">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </div>
        <div className="social-container">
          <div className="social-icon bg-1">
            <Facebook />
          </div>
          <div className="social-icon bg-2">
            <Twitter />
          </div>
          <div className="social-icon bg-3">
            <Instagram />
          </div>
          <div className="social-icon bg-4">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="center-footer">
        <div className="title-footer">Categorías</div>
        <ul className="list-footer">
          <li className="list-item-footer">Inicio</li>
          <li className="list-item-footer">Carrito</li>
          <li className="list-item-footer">Accesorios</li>
          <li className="list-item-footer">Teclados</li>
          <li className="list-item-footer">Monitores</li>
          <li className="list-item-footer">Sillas Gamer</li>
          <li className="list-item-footer">Parlantes</li>
          <li className="list-item-footer">Celulares</li>
          <li className="list-item-footer">Notebooks</li>
        </ul>
      </div>
      <div className="right-footer">
        <div className="title-contact">Contact</div>
        <div className="contact-item">
          <Room className="mr-10" /> calle falsa 123, miami florida 8987
        </div>
        <div className="contact-item">
          <Phone className="mr-10" /> +54 011 6734336
        </div>
        <div className="contact-item">
          <MailOutline className="mr-10" /> contact@gmail.com
        </div>
        <div className="payment">
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
