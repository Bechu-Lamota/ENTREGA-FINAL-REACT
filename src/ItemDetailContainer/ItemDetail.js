import React from "react";
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

    return (
        <div>
            <div>
                <img src={item.img} className="imgDetail" alt={item.description}/>
                <h2>{item.description}</h2>
                <p>{item.motor} Nm</p>
                <p>$ {item.price}</p>
            </div>
            <div>
                <ItemCount stockItem={item.stock} />
            </div>
        </div>
    )
} 

export default ItemDetail;