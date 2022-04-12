import { Link } from "react-router-dom";
import "./Item.scss";

function Item(props) {
  return (
    <Link to={`/productos/${props.id}`}>
      <div className="ui_item_content">
        <div className="ui_item">
          <div className="ui_item_image">
            <a className="ui_item_link">
              <img src={props.img} alt="imagen producto"></img>
            </a>
          </div>
          <div className="ui_item_info">
            <div className="info_content">
              <div className="ui_info_price">
                <span>{props.price}</span>
              </div>
              <div className="ui_shipping_free">
                <p>Envío gratis</p>
              </div>
            </div>
            <p className="ui_title">{props.title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;
