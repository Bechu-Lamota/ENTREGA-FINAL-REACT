import React from "react";
import {NavLink} from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from "../Context/CartContext";

const ItemDetail = ({item}) => {

    const { addProduct } = useCartContext();

    const formPrice = parseFloat(item.price).toLocaleString('en').replace(/,/g, '.');

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`);
        addProduct(item, cantidad)
    }

    return (
        <div>
            <div>
                <div>
                    <NavLink to='/productos'><i className="bi bi-caret-left-fill"></i>Volver</NavLink>
                </div>
                <div>
                    <img src={item.imagen2} className="imgDetail" alt={item.category}/>
                    <h2>{item.tipomotor}</h2>
                    <p>{item.motor} CV</p>
                    <p>$ {formPrice}</p>
                </div>
                <div>
                    <ItemCount stock={item.stock} inicial={1} onAdd={onAdd}/>
                </div>
                </div>
        </div>
    )
} 

export default ItemDetail;