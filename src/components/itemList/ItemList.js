import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MockProducts from "../../assets/MockProducts";
import Item from "../item/Item";
import database from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./ItemList.scss";
import { CircularProgress } from "@mui/material";

const ListProducts = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { categoria } = useParams();
  const [loading, setLoading] = useState(true);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MockProducts);
    }, 2000);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      return result;
    } catch (error) {
      console.log(error);
      alert(
        "Ha ocurrido un error, no podemos mostrar los productos en este momento"
      );
    }
  };

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProductsFromDB().then((p) => {
      setLoading(false);
      categoria ? filterProductByCategory(p, categoria) : setProducts(p);
    });
  }, [categoria]);

  const filterProductByCategory = (array, categoria) => {
    return array.map((product) => {
      if (product.categoria === categoria) {
        return setProducts([...products, product]);
      }
    });
  };

  return (
    <section className="store-catalog">
      <div className="heading">
        <span>{children}</span>
      </div>
      <div className="container-products">
        {loading ? (
          <CircularProgress />
        ) : (
          products.map((product) => {
            return (
              <div key={product.id}>
                <Item
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  img={product.image}
                />
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default ListProducts;

// TRAER PRODUCTOS DESDE LA BASE DE DATOS
// const getProducts = async () => {
//   const itemCollection = collection(database, "productos");
//   const productos = await getDocs(itemCollection);
//   console.log(productos);
//   const productList = productos.docs.map((doc) => {
//     let product = doc.data();
//     product.id = doc.id;
//     console.log(product);
//     return product;
//   });
//   return productList;
// };

// useEffect(() => {
//   setProducts([]);
//   setLoading(true);
//   getProductsFromDB().then( (p) => {
//     setLoading(false)
//     categoria ? filterProductByCategory(p, categoria) : setProducts(p)
//   })
// }, [categoria]);

// const filterProductByCategory = (array, categoria) => {
//   return array.map((x) => {
//     if (x.categoria === categoria) {
//       return setProducts([...products, x]);
//     }
//   });
// };
