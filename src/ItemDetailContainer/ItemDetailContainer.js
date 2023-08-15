import React from "react";
import arrayProductos from '../JSON/arrayProductos.json';
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams, NavLink} from 'react-router-dom';

const ItemDetailContainer = () => {
    const[item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const prom = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)))
            }, 300)
        });
        prom.then((data) => {
            setItem(data)
        })
    }, [id])

    return (
        <div className="bg-gy">
            <ItemDetail item={item}/>
            <div className="footer">
                <div className="bodyFooter">
                    <div className="lineBodyFooter">
                        <p className="derechosReservados"> © 2023, NewBK S.A.S. - Todos los derechos reservados | Juana Manso 1460, C1107, CABA</p>
                        <div className="listBodyFooter">
                        <NavLink to='/otros' className="trasnparentButton">Términos y Condiciones</NavLink>
                        <NavLink to='/otros' className="trasnparentButton">Políticas de Privacidad</NavLink>
                        <NavLink to='/contacto' className="trasnparentButton">Botón de arrepentimiento</NavLink>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default ItemDetailContainer;