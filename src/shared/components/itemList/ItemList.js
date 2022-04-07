import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MockProducts from "../../../assets/MockProducts";
import Item from "../item/Item";
import "./ItemList.scss";

const ListProducts = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { categoria } = useParams();

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MockProducts);
    }, 2000);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
      filterProductByCategory(result, categoria);
    } catch (error) {
      console.log(error);
      alert(
        "Ha ocurrido un error, no podemos mostrar los productos en este momento"
      );
    }
  };

  useEffect(() => {
    setProducts([]);
    getProductsFromDB();
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
        {products.length ? (
          products.map((product) => {
            return (
              <div key={product.id}>
                <Item
                  id={product.id}
                  title={product.titleShort}
                  price={product.price}
                  img={product.image}
                />
              </div>
            );
          })
        ) : (
          <p>Cargando productos....</p>
        )}
      </div>
    </section>
  );
};

export default ListProducts;
