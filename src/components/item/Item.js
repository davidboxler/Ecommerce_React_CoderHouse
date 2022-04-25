import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import "./Item.scss";

function Item(props) {
  const { addProductToCart } = useContext(CartContext);
 
  const addToCart = (e) => {
    e.stopPropagation();
      addProductToCart(props);
  }

  return (
      <div className="container-product">
        <div className="circle"></div>
        <img src={props.imagen} />
        <div className="info-product">
          <div className="icon-product">
            <Link to={`/productos/${props.id}`}><SearchOutlined /></Link> 
          </div>
          <div className="icon-product">
          <button className="button add" onClick={addToCart}>
          <ShoppingCartOutlined />
                  </button>
          </div>
          <div className="icon-product">
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
  );
}

export default Item;
