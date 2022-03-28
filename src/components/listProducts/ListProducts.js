import React, { useState, useEffect } from "react";
import CardProduct from "../cardProducts/CardProducts";
import "./ListProducts.scss";

const ListProducts = ({ children }) => {
  const arrayProducts = [
    {
      id: "978173-MLA32582347639_102019",
      title: "Peluche Stitch",
      price: "9990.89",
      stock: "5",
      url: "stitch1.jpg",
    },
    {
      id: "754004-MLA32299823528_092019",
      title: "Muñeco Stitch",
      price: "7890.89",
      stock: "6",
      url: "stitch1.jpg",
    },
    {
      id: "616691-MLA27900381255_082018",
      title: "Peluche Gigante",
      price: "9559.87",
      stock: "4",
      url: "stitch1.jpg",
    },
    {
      id: "918230-MLA31424182281_072019",
      title: "Muñeco Stitch",
      price: "1999.89",
      stock: "2",
      url: "stitch1.jpg",
    },
  ];

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrayProducts);
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts()
      .then((productos) => {
        setProducts(productos);
      })
      .finally(() => {
        console.log("Termino la llamada");
      });
  }, []);

  return (
    <div className="list-card-container">
      <div className="title">
        <h2>{children}</h2>
      </div>
      <div className="listCards">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            title={product.title}
            price={product.price}
            stock={product.stock}
            img={product.url}
          ></CardProduct>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
