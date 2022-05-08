import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
  Star,
} from "@mui/icons-material";
import "./Item.scss";
import { amber, grey } from "@mui/material/colors";

function Item(props) {
  const { addProductToCart } = useContext(CartContext);

  const addToCart = (e) => {
    e.stopPropagation();
    addProductToCart(props);
  };

  return (
    <div className="container-product">
      <img src={props.imagen} />
      <div className="info-product">
        <div className="container-icon">
          <div className="icon-product">
            <Link to={`/productos/${props.id}`}>
              <SearchOutlined sx={{ color: grey[900] }} />
            </Link>
          </div>
          <div className="icon-product icon" onClick={addToCart}>
            <ShoppingCartOutlined sx={{ color: grey[900] }} />
          </div>
          <div className="icon-product icon">
            <FavoriteBorderOutlined sx={{ color: grey[900] }} />
          </div>
        </div>
        <div className="des">
          <h5>{props.titleShort}</h5>
          <div className="star">
            <Star sx={{ color: amber[500]}} />
            <Star sx={{ color: amber[500]}} />
            <Star sx={{ color: amber[500]}} />
            <Star sx={{ color: amber[500]}} />
            <Star sx={{ color: amber[500]}} />
          </div>
          <h4>$ {props.precio}</h4>
        </div>
      </div>
    </div>
  );
}

export default Item;
