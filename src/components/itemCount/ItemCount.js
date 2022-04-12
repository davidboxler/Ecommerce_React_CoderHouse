import { useState } from "react"
import './ItemCount.scss';

const ItemCount = ({ count, actionIncr, actionDecr}) => {
    return(
        <div className="count">
            <button onClick={actionDecr}>-</button>
            <p>{count}</p>
            <button onClick={actionIncr}>+</button>
        </div>
    )
}

export default ItemCount;