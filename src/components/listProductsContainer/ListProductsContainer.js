import ListProducts from "../listProducts/ListProducts";

function ListProductsContainer() {
  return (
    <div className="container__list">
      <ListProducts>
        <p>Productos más vendidos</p>
      </ListProducts>
    </div>
  );
}

export default ListProductsContainer;
