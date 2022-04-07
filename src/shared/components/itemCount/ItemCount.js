import { useState } from "react"
import './ItemCount.scss';

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }
    return(
        <div className="count">
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount;