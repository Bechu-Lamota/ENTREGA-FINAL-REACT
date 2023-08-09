import React from "react";
import {NavLink} from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../JSON/arrayProductos.json";
import ItemList from "./ItemList"

const Productos = () => {
    const   [item, setItem] = useState([]);
    const   {id} = useParams();

    useEffect(() => {
        const fetchData = async() => {
            try {
                const data = await new Promise((resolve) =>{
                    setTimeout(()=>{
                        resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos)
                    }, 1000);
                });
                setItem(data);
            } catch(error){
                console.log('Error:', error);
            }
        };
        fetchData();
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
                    <p class="derechosReservados"> © 2023, NewBK S.A.S. - Todos los derechos reservados | Juana Manso 1460, C1107, CABA</p>
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

