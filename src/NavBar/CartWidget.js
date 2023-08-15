import React from "react";
import { useCartContext } from "../Context/CartContext";

const CartWidget = () => {
    const { totalProductos } = useCartContext();

    return (
        <div>
            <i className="bi bi-basket bigLtre"></i>
            <span className="crclRed">{totalProductos() || ''}</span>
        </div>
    );
}

export default CartWidget;