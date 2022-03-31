import React, { useState, useEffect } from "react";
import ProductsDetails from "../productsDetails/ProductsDetails";
import "./ListProductsDetails.scss";

function ListProductsDetails() {
  const arrayProductsdetails = [
    {
      id: "MLA32582347639",
      title: "Peluche Stitch",
      description: "Peluches Gigantes. ¡Los mejores del País! Stitich AMOROSOS MIDE 1 METRO EN L LAS MEDIDAS ESTÁN EN LAS FOTOS DE LARGO MIDE 95 CM Hermoso para todas las edades. Recomendable para cualquier edad. Es hipoalergénico. Hecho con peluche y relleno de algodon.",
      price: "9990",
      size: "XL",
      stock: "5",
      url: "stitch1.jpg",
    }
  ];

  const [details, setDetails] = useState([]);


  const getProductsDetails = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrayProductsdetails);
      }, 2000);
    });
  };

  useEffect(() => {
    getProductsDetails()
      .then((detalles) => {
        setDetails(detalles);
      })
      .finally(() => {
        console.log("Termino la llamada");
      });
  }, []);

  return (
    <div className="">
      <div className="">
        {details.map((details) => (
          <ProductsDetails
            key={details.id}
            title={details.title}
            price={details.price}
            description={details.description}
            size={details.size}
            img={details.url}
          ></ProductsDetails>
        ))}
      </div>
    </div>
  );
};

export default ListProductsDetails;
