import "./ItemDetails.scss";
import ItemCount from '../itemCount/ItemCount';
import { HiOutlineHeart, HiOutlineTruck } from "react-icons/hi";

const ItemDetails = ({data}) => {
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
              <ItemCount stock={data.stock} />
            </div>

            <div className="button_card">
              <button className="solid">Comprar ahora</button>
              <button>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
