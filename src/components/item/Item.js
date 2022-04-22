import { Link } from "react-router-dom";
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import "./Item.scss";

function Item(props) {
  return (
      <div className="container-product">
        <div className="circle"></div>
        <img src={props.img} />
        <div className="info-product">
          <div className="icon-product">
            <Link to={`/productos/${props.id}`}><SearchOutlined /></Link> 
          </div>
          <div className="icon-product">
          <Link to={`/carrito/`}><ShoppingCartOutlined /></Link> 
          </div>
          <div className="icon-product">
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
  );
}

export default Item;
