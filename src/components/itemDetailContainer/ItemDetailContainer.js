import React from "react";
import ItemDetails from "../itemDetails/ItemDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MockProducts from "../../assets/MockProducts";

function ItemDetailContainer() {
  const { id } = useParams();
  const [ details, setProduct ] = useState({});

  useEffect(() => {
    filterProductById(MockProducts, id);
  }, [id]);

  const filterProductById = (array, id) => {
    return array.map((product) => {
      if (product.id === id) {
        return setProduct(product);
      }
    });
  };

  return (
    <ItemDetails data={details} />
  );
}

export default ItemDetailContainer;

// TRAER PRODUCTO CON FIREBESE Y FILTRAR ID
// const getProduct = async() => {
//     const docRef = doc(database, "productos", id);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//         console.log("Document data:", docSnap.data());
//         let product = docSnap.data()
//         product.id = docSnap.id
//         setProduct(product)
//       } else {
//         console.log("No such document!");
//       }
// }

// useEffect( () => {
//     getProduct()
// }, [id])
