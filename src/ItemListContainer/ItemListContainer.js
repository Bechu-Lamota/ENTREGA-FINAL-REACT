import React from "react";
import {NavLink} from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import ItemList from "./ItemList"

const Productos = () => {
    const   [item, setItem] = useState([]);
    const   {id} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        getDocs(queryCollection)
        .then(res => setItem(res.docs.map(p => ({id: p.id, ...p.data()}))))

    }, [id])

 

    return (
        <div className="cl-f4">
            <div>
                Este div es de filtros
            </div>
            <div className="boxItemList">
                <ItemList item={item} />
            </div>
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
    );
}

export default Productos;

