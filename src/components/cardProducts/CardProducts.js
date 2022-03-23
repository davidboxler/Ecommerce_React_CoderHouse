import './CardProducts.css';
import image from '../../assets/shoes2.png';
import ItemCount from '../itemCount/ItemCount';

function CardProducts(props) {
    return(
        <div className='card'>
            <div className='imgBx'>
                <img src={image} alt="imagen-zapatillas" />
            </div>
            <div className='contentBx'>
                <h3>{props.title}</h3>
                <h2 className='price'>$ {props.precio}</h2>
                <ItemCount stock={props.stock}/>
                <a href='_blank' className='buy'>Add cart</a>
            </div>
        </div>
    )
}

export default CardProducts;