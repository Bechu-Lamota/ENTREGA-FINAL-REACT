import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../JSON/arrayProductos.json";
import Contador from "../ItemDetailContainer/ItemCount";
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
                    }, 3000);
                });
                setItem(data);
            } catch(error){
                console.log('Error:', error);
            }
        };
        fetchData();
    }, [id])

 

    return (
        <div>
            <h2> Somos Productos</h2>
            <ItemList item={item} />
            <Contador />
        </div>
    );
}

export default Productos;

