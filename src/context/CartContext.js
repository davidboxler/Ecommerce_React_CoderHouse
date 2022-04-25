import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductToCart = (product) => {
    let exist = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );
    if (!exist) {
      setTotalPrice(totalPrice + product.precio * product.cantidad);
      setCartProducts((cartProducts) => [...cartProducts, product]);
    }
  };

  const deleteProduct = (product) => {
    setCartProducts(
      cartProducts.filter((cartProduct) => cartProduct.id !== product.id)
    );
    setTotalPrice(totalPrice - product.precio * product.cantidad);
  };

  const data = {
    cartProducts,
    addProductToCart,
    deleteProduct,
    totalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;