import React from "react";
import Item from "./Item";

const ItemList = ({item}) => {
    return (
        <div className="itemList">
            {item.map(item =>(<Item key={item.id} item={item} />))}
        </div> 
    );
}

export default ItemList;