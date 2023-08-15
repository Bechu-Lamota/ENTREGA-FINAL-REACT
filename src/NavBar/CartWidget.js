import React from "react";
import { useCartContext } from "../Context/CartContext";

const CartWidget = () => {
    const { totalProductos } = useCartContext();

    return (
        <div>
            <i className="bi bi-basket"></i>
            <span>{totalProductos() || ''}</span>
        </div>
    );
}

export default CartWidget;