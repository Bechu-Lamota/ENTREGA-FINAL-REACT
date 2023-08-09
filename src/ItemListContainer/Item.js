import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {

    return (
        <Link to={"/item/" + item.id} className="bd-sp-it">
            <div className="imgItem">
                <img src={item.imagen} width={300} height={200} alt={item.name} />
            </div>
            <div className="txtCenter">
                <div className="añoKm">
                    <h4 className="pd-mg kmItem cl-bk-lig"> {item.km} </h4>
                    <h4 className="pd-mg añoItem cl-bk-lig"> {item.año} </h4>
                </div>
                <h2 className="priceItem cl-bk-md">$ {item.price}</h2>
                <p className="nameItem cl-bk-md"> {item.name} </p>
            </div>
        </Link>
    );
}

export default Item;