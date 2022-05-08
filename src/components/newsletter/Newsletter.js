import React from "react";
import "./Newsletter.scss";

export const Newsletter = () => {
  return (
    <section id="newsletter" className="section-p1 section-m1">
      <div className="newstext">
        <h4>Subscríbete!</h4>
        <p>Ingresa tu Email y recibe noticias sobre <span>descuentos y ofertas!</span></p>
      </div>
      <div className="form">
        <input type="text" placeholder="Ingresa tu email" />
        <button className="normal">Enviar</button>
      </div>
    </section>
  );
};

export default Newsletter;
