import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../item/Item";
import database from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./ItemList.scss";
import { CircularProgress } from "@mui/material";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const { categoria } = useParams();
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const itemCollection = collection(database, "productos");
    const productos = await getDocs(itemCollection);
    const productList = productos.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return productList;
  };

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProducts().then((p) => {
      setLoading(false)
      categoria ? filterProductByCategory(p, categoria) : setProducts(p)
    })
  }, [categoria]);

  const filterProductByCategory = (array, categoria) => {
    return array.map((x, i) => {
      if (x.categoria === categoria) {
        return setProducts(products => [...products, x]);
      }
    });
  };

  return (
    <section id="listProducts" className="section-p1">
      <h2>Nuestros Productos</h2>
      <p>Llevá tu múscia a todos lados y compartí tu mundo</p>
      <div className="pro-container">
      {loading ? (
          <CircularProgress />
        ) : (
          products.map((product) => {
            return (
                <Item key={product.id}
                  id={product.id}
                  title={product.title}
                  precio={product.precio}
                  imagen={product.imagen}
                  color={product.color}
                  titleShort={product.titleShort}
                  cantidad={product.cantidad}
                />
            );
          })
        )}
      </div>
    </section>
  );
};

export default ListProducts;
