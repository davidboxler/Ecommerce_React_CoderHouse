import './CardProducts.css';
import image from '../../assets/shoes2.png';

function CardProducts(props) {
    return(
        <div className='card'>
            <div className='imgBx'>
                <img src={image} />
            </div>
            <div className='contentBx'>
                <h3>{props.title}</h3>
                <h2 className='price'>$ {props.precio}</h2>
                <a href='_blank' className='buy'>Buy Now</a>
            </div>
        </div>
    )
}

export default CardProducts;