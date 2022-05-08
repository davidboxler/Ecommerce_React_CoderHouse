import "./Cart.scss";
import CartContext from "../../context/CartContext";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import Modal from "../modal/Modal";
import { Button } from "react-bootstrap";
import database from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";

function Cart() {
  const { cartProducts, totalPrice, deleteProduct } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [order, setOrder] = useState({
    client: formData,
    items: cartProducts.map((item) => {
      return {
        id: item.id,
        title: item.title,
        precio: item.precio,
      };
    }),
    total: totalPrice,
  });

  useEffect(() => {
    cartProducts.length ? setLoading(false) : setLoading(true);
  }, []);

  const [finalizarCompra, setFinalizarCompra] = useState();

  const handleSubmit = (e) => {
    if (cartProducts.length === 0) {
      alert("No tienes ningún poducto en el carrito");
    } else {
      let prevOrder = { ...order, client: formData };
      e.preventDefault();
      setOrder({ ...order, client: formData });
      nuevaCompra(prevOrder);
    }
  };

  const reload = () => {
    window.location.reload(true);
  };

  const nuevaCompra = async (prevOrder) => {
    const compraFirebase = collection(database, "compras");
    const compraDoc = await addDoc(compraFirebase, prevOrder);
    setFinalizarCompra(compraDoc.id);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container-cart">
      <div className="wrapper-cart">
        <h1 className="title-cart">Tu Carrito</h1>
        <div className="top">
          <div className="top-button next">
            <Link to={"/"}>
              Segir Comprando
            </Link>
          </div>
        </div>
        <div className="btn-cart">
          <div className="info-cart">
            {loading ? (
              <CircularProgress />
            ) : (
              cartProducts.map((product) => {
                return (
                  <div className="product-cart mr-b" key={product.id}>
                    <div className="product-detail-cart">
                      <img className="img-cart" src={product.imagen} />
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
                        <p>{product.cantidad}</p>
                      </div>
                      <div className="price-product-cart">
                        $ {product.precio}
                      </div>
                    </div>
                    <button className="btn-icon-cart">
                      <Delete
                        sx={{ color: red[500] }}
                        onClick={() => deleteProduct(product)}
                      />
                    </button>
                  </div>
                );
              })
            )}
          </div>
          <div className="sumary">
            <h1 className="sumary-title">Tus Productos</h1>
            <div className="sumary-item">
              <div className="sumary-item-text sub-total">Subtotal</div>
              <div className="sumary-item-price">
                $ {Math.floor(totalPrice)}
              </div>
            </div>
            <div className="sumary-item">
              <div className="sumary-item-text total">Total</div>
              <div className="sumary-item-price">
                $ {Math.floor(totalPrice)}
              </div>
            </div>
            <div className="btn-cart-item" onClick={() => setOpenModal(true)}>
              Comprar Ahora
            </div>
          </div>
        </div>
      </div>
      <Modal handleClose={() => setOpenModal(false)} open={openModal}>
        <h2 className="title-form">Formulario</h2>
        {finalizarCompra ? (
          <>
            <h3 className="title-order">Orden generada correctamente</h3>
            <p className="number">Su numero de orden es: {finalizarCompra}</p>
            <button type="submit" className="normal" onClick={reload}>
              <Link to={"/"}>Volver</Link>
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={handleChange}
              value={formData.name}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Telefono"
              onChange={handleChange}
              value={formData.phone}
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
            <Button type="submit" className="normal">
              Enviar
            </Button>
          </form>
        )}
      </Modal>
    </div>
  );
}

export default Cart;
