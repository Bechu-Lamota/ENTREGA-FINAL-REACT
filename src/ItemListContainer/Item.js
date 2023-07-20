import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {

    return (
        <Link to={"/item/" + item.id}>
         <div className="containerItem">
            <div>
                <img src={item.imagen} width={300} height={200} alt={item.name} />
                <p>{item.name} </p>
            </div>
         </div>
        </Link>
    );
}

export default Item;