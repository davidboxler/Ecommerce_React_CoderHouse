import './CardProducts.scss';
import ItemCount from '../itemCount/ItemCount';

function CardProducts(props) {
    return(
        <div className='card'>
            <div className='imgBx'>
                <img src={`./${props.img}`} alt="imagen-peluche grande" />
            </div>
            <div className='contentBx'>
                <h3>{props.title}</h3>
                <h2 className='price'>$ {props.price}</h2>
                <ItemCount stock={props.stock}/>
                <a href='_blank' className='buy'>Detalles</a>
            </div>
        </div>
    )
}

export default CardProducts;