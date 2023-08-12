import React from "react";
import {NavLink} from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`);
    }

    return (
        <div>
            <div>
                <div>
                    <NavLink to='/productos' className=""><i class="bi bi-caret-left-fill"></i>Volver</NavLink>
                </div>
                <div>
                    <img src={item.imagen2} className="imgDetail" alt={item.category}/>
                    <h2>{item.tipomotor}</h2>
                    <p>{item.motor} CV</p>
                <p>$ {item.price}</p>
                </div>
                <div>
                    <ItemCount stock={item.stock} inicial={1} onAdd={onAdd}/>
                </div>
                </div>
        </div>
    )
} 

export default ItemDetail;