import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams, NavLink} from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const[item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = doc(querydb, 'productos', id);
        getDoc(queryCollection)
            .then(res => setItem({ id: res.id, ...res.data()}))

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