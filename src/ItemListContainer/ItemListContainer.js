import React from "react";
import {NavLink} from 'react-router-dom';
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import ItemList from "./ItemList"

const Productos = () => {
    const   [item, setItem] = useState([]);
    const [category, setCategory] = useState();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');

        const filtroQuery = category
            ? query(queryCollection, where('category', '==', category))
            : queryCollection;

        getDocs(filtroQuery)
        .then(res => setItem(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        .catch(e => console.error('Error fetching data:', e));

    }, [category])

    const filtradoCategory = (category) => {
        setCategory(category);
    }

    return (
        <div className="cl-f4">
            <div className="jf-ct">
            <div className="fx-cl-ct boxFiltro">
                <h1 className="pd-20px cl-bk-bld ">FILTROS</h1>
                <button className="bg-btn btn-Link cl-bk-bld" onClick={() => filtradoCategory('naked')}>Naked</button>
                <button className="bg-btn btn-Link cl-bk-bld" onClick={() => filtradoCategory('touring')}>Touring</button>
                <button className="bg-btn btn-Link cl-bk-bld" onClick={() => filtradoCategory('scooter')}>Scooter</button>
            </div>
            <div className="boxItemList">
                <ItemList item={item} />
            </div>
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

