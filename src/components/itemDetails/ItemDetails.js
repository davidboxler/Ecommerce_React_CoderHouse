import { useState, useContext } from "react";
import "./ItemDetails.scss";
import { HiOutlineHeart, HiOutlineTruck } from "react-icons/hi";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import CartContext from "../../context/CartContext";

const ItemDetails = ({ data }) => {
  const { addProductToCart } = useContext(CartContext);
  const [contador, setContador] = useState(1);
  const [mostrarComponente, setMostrarComponente] = useState(true);

  const agregarProducto = () => {
    if (contador < data.stock) {
      setContador(contador + 1);
    }
  };

  const restarProducto = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const addToCart = (e) => {
    e.stopPropagation();
    if (contador === 0) {
      alert("Debe agregar al menos un producto al carrito");
    } else {
      data.cantidad = contador;
      addProductToCart(data);
      setMostrarComponente(!mostrarComponente);
    }
  };

  return (
    <div className="container_product">
      <div className="panel">
        <div className="column">
          <div className="galery">
            <img src={`/${data.imagen}`} alt="producto" />
          </div>
          <div className="description">
            <h4>Descripción</h4>
            <p>{data.descripcion}</p>
          </div>
        </div>
        <div className="column">
          <div className="container_producto_venta">
            <div className="estado">Nuevo | 4 vendidos</div>

            <div className="row_producto">
              <h1>{data.title}</h1>
              <HiOutlineHeart className="icon_heart" />
            </div>

            <div className="price_producto">$ {data.precio}</div>

            <div className="card_venta">
              <HiOutlineTruck className="icon_truck" />
              <div>
                <span className="title">Llega gratis mañana</span>
                <span className="detalle">Beneficio Mercado Puntos</span>
                <a href="_blanck" className="more">
                  Ver más formas de entrega
                </a>
              </div>
            </div>

            <div className="color">
              Color: <strong>{data.color}</strong>
            </div>

            <div className="color">
              Color de la luz: <strong>Rojo</strong>
            </div>

            <div className={mostrarComponente ? "show-element" : null}>
              {mostrarComponente && (
                <div className="cantidad">
                  <ItemCount  count={contador}
                    itemAdd={agregarProducto}
                    itemRest={restarProducto} />
                </div>
              )}
            </div>

            <div className="button_card">
              <div className={mostrarComponente ? "show-element" : null}>
                {!mostrarComponente && (
                  <Link to={"/carrito"} className="button solid ">
                    Comprar ahora
                  </Link>
                )}
              </div>

              <div className={mostrarComponente ? "show-element" : null}>
                {mostrarComponente && (
                  <button className="button add" onClick={addToCart}>
                    Agregar al carrito
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
