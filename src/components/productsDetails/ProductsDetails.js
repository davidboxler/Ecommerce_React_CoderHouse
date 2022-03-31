import "./ProductsDetails.scss";

function ProductsDetails(props) {
  return (
    <div className="container_card">
      <div className="card">
        <div className="imgBx">
          <img src={`./${props.img}`} alt="peluche stitch"></img>
        </div>
        <div className="details">
          <h3>
            {props.title}
            <br />
            <span>Gigante</span>
          </h3>
          <h4>Products Details</h4>
          <p>
            {props.description}
          </p>
          <h4>Tamaño</h4>
          <ul className="size">
            <li>{props.size}</li>
          </ul>
          <div className="group">
            <h2>
              <sup>$</sup>{props.price}<small>.99</small>
            </h2>
            <a href="_blanck">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
