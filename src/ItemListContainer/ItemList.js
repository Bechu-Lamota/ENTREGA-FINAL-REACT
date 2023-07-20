import React from "react";
import Item from "./Item";

const ItemList = ({item}) => {
    return (
        <div>
            {item.map(item => <Item key={item.id}/>)}
        </div> 
    );
}

export default ItemList;