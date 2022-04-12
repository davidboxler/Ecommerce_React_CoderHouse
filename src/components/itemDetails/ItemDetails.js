import "./ItemDetails.scss";
import ItemCount from "../itemCount/ItemCount";
import { HiOutlineHeart, HiOutlineTruck } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemDetails = ({ data }) => {
  const [contador, setContador] = useState(0);
  const { cartProducts, addProductToCart } = useContext(CartContext)

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
    e.stopPropagation()
    console.log("Productos cargados: ", cartProducts)
    addProductToCart(data)
  }

  return (
    <div className="container_product">
      <div className="panel">
        <div className="column">
          <div className="galery">
            <img src={`${data.img}`} alt="producto"></img>
          </div>
          <div className="description">
            <h4>Descripción</h4>
            <p>{data.description}</p>
          </div>
        </div>
        <div className="column">
          <div className="container_producto_venta">
            <div className="estado">Nuevo | 4 vendidos</div>

            <div className="row_producto">
              <h1>{data.title}</h1>
              <HiOutlineHeart className="icon_heart" />
            </div>

            <div className="price_producto">$ {data.price}</div>

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

            <div className="cantidad">
              <ItemCount count={contador} actionIncr={agregarProducto} actionDecr={restarProducto} />
            </div>

            <div className="button_card">
              <Link to={"/carrito"} className="button solid">
                Comprar ahora
              </Link>
              <button onClick={addToCart}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
