import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {

    const formPrice = parseFloat(item.price).toLocaleString('en').replace(/,/g, '.');

    return (
        <Link to={"/item/" + item.id} className="bd-sp-it">
            <div className="imgItem jf-ct">
                <img src={item.imagen} width={300} height={200} alt={item.name} />
            </div>
            <div className="txtCenter">
                <div className="añoKm">
                    <h4 className="pd-mg2 kmItem cl-bk-lig"> {item.km} </h4>
                    <h4 className="pd-mg2 añoItem cl-bk-lig"> {item.año} </h4>
                </div>
                <p className="nameItem cl-bk-md"> {item.name} </p>
                <h2 className="priceItem cl-bk-md">$ {formPrice}</h2>
            </div>
        </Link>
    );
}

export default Item;