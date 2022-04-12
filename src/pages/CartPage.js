import CartContext from "../context/CartContext";
import { useContext } from "react";

function ContactPage() {
  const { cartProducts } = useContext(CartContext);
  console.log(cartProducts);
  return (
    <div>
      <h1>Página del Carrito</h1>
      {cartProducts.map((cartProduct) => {
        return (
          <div>
            <div>{cartProduct.title}</div>
            <img src={cartProduct.image}></img>
            <div>{cartProduct.price}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactPage;
