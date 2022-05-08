import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../item/Item";
import database from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./SliderList.scss";

export const SliderList = () => {
  const [products, setProducts] = useState([]);
  const { categoria } = useParams();

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
    getProducts().then((p) => {
      categoria ? filterProductByCategory(p, categoria) : setProducts(p);
    });
  }, [categoria]);

  const filterProductByCategory = (array, categoria) => {
    return array.map((x, i) => {
      if (x.categoria === categoria) {
        return setProducts((products) => [...products, x]);
      }
    });
  };

  return (
    <section id="slider" className="section-p1">
      <div className="container-carousel">
        <div className="carousel">
          {products.map((p) => {
            return (
              <div className="item" key={p.id}>
                <div className="image">
                  <img className="img-slider" src={p.imagen}></img>
                </div>
                <div className="info">
                  <span className="name">{p.titleShort}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SliderList