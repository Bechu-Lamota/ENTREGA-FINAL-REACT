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
        <div className="bg-gy">
                    <NavLink to='/productos' className="pd-mg2 cl-bk-bld btn-Link "><i className="bi bi-caret-left-fill"></i>Volver</NavLink>
                <div className="jf-ct bg-wh pd-mg2 mg-tp jf-ct-cl">
                    <img src={item.imagen2} className="bd-rd20 bg-gy-bd" alt={item.category}/>
                    <div className="fx-cl-ct bg-gy-bd2">
                        <h1 className="">{item.name}</h1>
                        <p className="">{item.tipomotor}</p>
                        <div className="jf-ct jf-ct-row">
                            <h5 className="pd-mg2">{item.motor} CV</h5>
                            <h5 className="pd-mg2">Condición: {item.km} Km</h5>
                        </div>
                        <h3 className="">$ {formPrice}</h3>
                        <div className="boxbtn">
                            <ItemCount stock={item.stock} inicial={1} onAdd={onAdd}/>
                        </div>
                    </div>
        </div>
        </div>
    )
} 

export default ItemDetail;