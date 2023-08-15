import React from "react";
import { useCartContext } from "../Context/CartContext";

const formatPrecio = (precio) => {
    return precio.toLocaleString().replace(/,/g, '.');
};

const ItemCart = ({ product }) => {
        const { removeProduct } = useCartContext();

        const Subtotal = product.cantidad * product.price

        const formPrice = parseFloat(product.price).toLocaleString('en').replace(/,/g, '.');

    return (
        <div>
            <img src={product.imagen2} width={300} height={200} alt={product.name} />
            <div>
                <p> Producto: {product.name}</p>
                <p> Cantidad: {product.cantidad}</p>
                <p> Precio: $ {formPrice}</p>
                <p> Subtotal: $ {formatPrecio(Subtotal)}</p>
                <button onClick={() => removeProduct(product.id)}> Eliminar </button>
            </div>
        </div>
    )
}

export default ItemCart