import React from "react";
import Item from "./Item";

const ItemList = ({item}) => { //Acá solo van los productos
    return (
        <div className="boxItemList itemList">
            {item.map(item =>(<Item key={item.id} item={item} />))}
        </div> 
    );
}

export default ItemList;