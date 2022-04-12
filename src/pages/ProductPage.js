import ItemDetails from "../components/itemDetails/ItemDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MockProducts from "../assets/MockProducts";


function ProductPage() {
    const { id } = useParams()
    const [details, setProduct] = useState({});

    useEffect( () => {
        filterProductById(MockProducts, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map((product) => {
            if(product.id === id) {
                return setProduct(product)
            }
        })
    }
    return(
        <>
          <ItemDetails data={details} />
      </>
    )
}

export default ProductPage;