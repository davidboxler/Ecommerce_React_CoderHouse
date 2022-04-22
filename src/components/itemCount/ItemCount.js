import { useState } from "react"
import './ItemCount.scss';

const ItemCount = ({ count, itemAdd, itemRest}) => {
    return(
        <div className="count">
            <button onClick={itemRest}>-</button>
            <p>{count}</p>
            <button onClick={itemAdd}>+</button>
        </div>
    )
}

export default ItemCount;