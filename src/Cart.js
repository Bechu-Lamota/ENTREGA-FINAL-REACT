import React from "react";
import {NavLink} from 'react-router-dom';
import { useCartContext } from "./Context/CartContext";
import ItemCart from "./ItemListContainer/ItemCart";

const Cart = () => {
    const { cart, totalPrecio } = useCartContext();

    if ( !cart || cart.length === 0) { //De esta manera cart no es undifined
        return (
            <div>
                <h2> No hay elementos en el carrito </h2>
                <NavLink to='/productos'> Catalogo </NavLink>
            </div>
        );
    }

    const formatoTotalPrecio = totalPrecio().toLocaleString().replace(/,/g, '.');

    return (
        <div>
            <div>
                {
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }
                <p> Total: $ {formatoTotalPrecio} </p>
            </div>
            <h2> Acá encontraremos el listado de nuestra seleccion </h2>
            <div className="bodyFooter">
                <div className="lineBodyFooter">
                    <p className="derechosReservados"> © 2023, NewBK S.A.S. - Todos los derechos reservados | Juana Manso 1460, C1107, CABA</p>
                    <div className="listBodyFooter">
                        <NavLink to='/otros' className="trasnparentButton">Términos y Condiciones</NavLink>
                        <NavLink to='/otros' className="trasnparentButton">Políticas de Privacidad</NavLink>
                        <NavLink to='/contacto' className="trasnparentButton">Botón de arrepentimiento</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;