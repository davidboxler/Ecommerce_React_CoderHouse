import React, { useContext, useState } from "react";
import "./CardWidgets.scss";
import { ShoppingCartOutlined, Delete } from "@mui/icons-material";
import { Badge, Menu } from "@mui/material";
import CartContext from "../../context/CartContext";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

export const CardWidgets = () => {
  const { cartProducts, deleteProduct } = useContext(CartContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("cartProducts: ", cartProducts);

  return (
    <div className="icon-menu">
      <Badge badgeContent={cartProducts.length} color="primary">
        <ShoppingCartOutlined
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        className="cart-modal"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <h2>Tu Carrito</h2>

        {cartProducts.length === 0 ? (
          <div className="cart-vacio-container">
            <p className="cartVacio">Tu Carrito está vacío</p>
          </div>
        ) : (
          cartProducts.map((cartProduct) => {
            return (
              <div className="productsContainer" key={cartProduct.id}>
                <div className="cartItem">
                  <img className="cartImg" src={cartProduct.image} />
                  <p>{cartProduct.titleShort}</p>
                  <span>$ {cartProduct.price}</span>
                  <button className="btn-icon-cart">
                    <Delete
                      sx={{ color: red[500] }}
                      onClick={() => deleteProduct(cartProduct)}
                    />
                  </button>
                </div>
              </div>
            );
          })
        )}
        <div className="footer-modal-cart">
          <Link className="button solid" to="/carrito">
            Iniciar la compra
          </Link>
        </div>
      </Menu>
    </div>
  );
};

export default CardWidgets;
