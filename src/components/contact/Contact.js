import React from "react";
import { useState } from "react";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";
import database from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";
import "./Contact.scss";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    asunto: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    let consulta = { ...formData };
    e.preventDefault();
    setFormData(consulta);
    nuevaConsulta(consulta);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [finalizarConsulta, setFinalizarConsulta] = useState();

  const nuevaConsulta = async (consulta) => {
    const consultaFirebase = collection(database, "consultas");
    const consultaDoc = await addDoc(consultaFirebase, consulta);
    setFinalizarConsulta(consultaDoc.id);
  };

  return (
    <section id="contact-details" className="section-p1">
      <div className="details">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-section">
          <h3>Consultas de stock</h3>
          <h4>¿Hay stock de todos los productos?</h4>
          <p>
            Todos los productos que publicamos están en stock. En caso de
            agotarse algún talle o color, esa característica se bloqueará, se
            verá color gris y no podrás seleccionarla. Haciendo click en el
            botón Consultar disponibilidad vas a poder realizar consulta de
            disponibilidad de stock y te enviaremos un email cuando haya stock
            nuevamente.
          </p>
          <h4>¿Hay algún límite de compra?</h4>
          <p>
            El único límite de compra que tenemos es el stock de nuestro E-Shop.
            Si deseás hacer una compra mayorista comunicate con nosotros a
          </p>
          <h3>Envío y seguimiento</h3>
          <h4>¿Puede recibir el paquete otra persona?</h4>
          <p>
            Tu pedido puede ser recibido por cualquier persona mayor de 18 años
            que se encuentre en el domicilio registrado.
          </p>
          <h4>¿Cuándo voy a recibir mi pedido?</h4>
          <p>
            Los pedidos son entregados a través de los correos Andreani – Saires
            y Moova en toda la República Argentina.
          </p>
          <h4>¿Qué pasa si no hay nadie cuando traen mi pedido?</h4>
          <p>
            Si no hay nadie en el domicilio que nos indicaste, el correo
            regresará a las 48 horas. En caso de no encontrar a nadie, deberás
            dirigirte al centro de distribución asignado a tu pedido dentro de
            las 72 horas con tu DNI y el código que te enviamos (tracking
            number).
          </p>
        </div>
      </div>

      <div id="form-details">
        <form onSubmit={handleSubmit}>
          <span>Escribí tu mensaje</span>
          <h2>Te responederemos a la brevedad</h2>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="text"
            name="asunto"
            placeholder="Asunto"
            onChange={handleChange}
            value={formData.asunto}
            required
          />
          <textarea
            type="text"
            name="mensaje"
            placeholder="Mensaje"
            onChange={handleChange}
            value={formData.mensaje}
            required
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" className="normal" onClick={() => setOpenModal(true)}>
            Enviar
          </button>
        </form>
      </div>
      {finalizarConsulta ? (
        <Modal handleClose={() => setOpenModal(false)} open={openModal}>
          <h2 className="title-form">Formulario</h2>
          <>
            <h3 className="title-order">
              Su consulta ha sido generada con éxito
            </h3>
            <p className="number">Le enviaremos una respuesta a la brevedad</p>
            <button type="submit" className="normal">
              <Link to={"/"}>Volver</Link>
            </button>
          </>
        </Modal>
      ) : (
        <h2 className="title-form">Formulario</h2>
      )}
    </section>
  );
};

export default Contact;
