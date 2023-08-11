import React from "react";
import {NavLink} from 'react-router-dom';

const Cart = () => {
    return (
        <div>
            <h2> Acá encontraremos el listado de nuestra seleccion </h2>
            <div className="bodyFooter">
                <div className="lineBodyFooter">
                    <p class="derechosReservados"> © 2023, NewBK S.A.S. - Todos los derechos reservados | Juana Manso 1460, C1107, CABA</p>
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