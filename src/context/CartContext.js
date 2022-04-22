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
      setTotalPrice(totalPrice + product.price * product.cantidad);
      setCartProducts((cartProducts) => [...cartProducts, product]);
      console.log("agregar producto al carrito", product);
    }
  };

  const deleteProduct = (product) => {
    setCartProducts(
      cartProducts.filter((cartProduct) => cartProduct.id !== product.id)
    );
    setTotalPrice(totalPrice - product.price * product.cantidad);
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

// const [cartProducts, setCartProducts] = useState([])
//     const [totalPrice, setTotalPrice] = useState(0)

//     const addProductToCart = (product) => {
//         let exist = cartProducts.find(cartProduct => cartProduct.id === product.id)
//         if(!exist) {
//             // setTotalPrice(totalPrice + product.price * product.quantity)
//             setTotalPrice(totalPrice + product.price)
//             setCartProducts(cartProducts => [...cartProducts, product])
//         }
//     }

//     const deleteProduct = (product) => {
//         setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
//     }

//     const data = {
//         cartProducts,
//         addProductToCart,
//         totalPrice,
//         deleteProduct
//     }
