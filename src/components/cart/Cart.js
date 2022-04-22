import "./Cart.scss";
import CartContext from "../../context/CartContext";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import { red } from "@mui/material/colors";

function Cart() {
  const { cartProducts, totalPrice, deleteProduct } = useContext(CartContext);
  // const [loading, setLoading] = useState(true);
  console.log(cartProducts);

  // useEffect(() => {
  //   setLoading(true);
  // }, []);
  const IVA = (totalPrice / 100) * 25;
  const descuento = (totalPrice / 100) * 10;
  return (
    <div className="container-cart">
      <div className="wrapper-cart">
        <h1 className="title-cart">Tu Carrito</h1>
        <div className="top">
          <div className="top-button next">
            <Link to={"/"}>Segir Comprando</Link>
          </div>
          <div className="top-button check">
            <Link to={"/login"}>Comprar Ahora</Link>
          </div>
        </div>
        <div className="btn-cart">
          <div className="info-cart">
            {/* {loading ? (
              <CircularProgress />
            ) : ( */}
            {cartProducts.map((product) => {
              return (
                <div className="product-cart mr-b">
                  <div className="product-detail-cart">
                    <img className="img-cart" src={product.image} />
                    <div className="details-cart">
                      <div className="product-name">
                        <b>Producto: </b> {product.title}
                      </div>
                      <div className="product-color">
                        <b>Color: </b> {product.color}
                      </div>
                    </div>
                  </div>
                  <div className="price-detail-cart">
                    <div className="product-amount-container">
                      {/* <ItemCount stock={product.cantidad} /> */}
                    </div>
                    <div className="price-product-cart">$ {product.price}</div>
                  </div>
                  <button className="btn-icon-cart">
                    <Delete
                      sx={{ color: red[500] }}
                      onClick={() => deleteProduct(product)}
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="sumary">
            <h1 className="sumary-title">Tus Productos</h1>
            <div className="sumary-item">
              <div className="sumary-item-text sub-total">Subtotal</div>
              <div className="sumary-item-price">$ {totalPrice}</div>
            </div>
            <div className="sumary-item">
              <div className="sumary-item-text sub-total">IVA</div>
              <div className="sumary-item-price">$ {IVA}</div>
            </div>
            <div className="sumary-item">
              <div className="sumary-item-text sub-total">Descuentos</div>
              <div className="sumary-item-price">$ {descuento}</div>
            </div>
            <div className="sumary-item">
              <div className="sumary-item-text total">Total</div>
              <div className="sumary-item-price">
                $ {totalPrice + IVA - descuento}
              </div>
            </div>
            <button className="btn-cart-item">Comprar ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
