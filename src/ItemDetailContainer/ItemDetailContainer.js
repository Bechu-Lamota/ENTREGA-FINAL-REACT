import React from "react";
import arrayProductos from '../JSON/arrayProductos.json';
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const[item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const prom = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)))
            }, 3000)
        });
        prom.then((data) => {
            setItem(data)
        })
    }, [id])

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;