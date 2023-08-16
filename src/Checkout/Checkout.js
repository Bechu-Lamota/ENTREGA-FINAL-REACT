import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getFirestore, collection, addDoc} from 'firebase/firestore'
import { useCartContext } from "../Context/CartContext";
import ItemCart from "../ItemListContainer/ItemCart";

const Checkout = () => {
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: "",
        Email: "",
        Telefono: "",
        Domicilio: ""
    });
    const { cart, totalPrecio } = useCartContext();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBuyer(prevBuyer => ({
            ...prevBuyer, [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const total = cart.reduce((acc, act) => acc + act.cantidad * act.price, 0);
        const dia = new Date()
        const data = { buyer, item: cart, dia, total }
        generaOrden(data)
    }

    const generaOrden = async (data) => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'Orders')
        const order = await addDoc(queryCollection, data)
        setOrderId(order.id)
    }

    const formPrice = parseFloat(totalPrecio()).toLocaleString('en').replace(/,/g, '.');

    return (
        <div className="bg-gy">
            <div>
            <div>
                <div>
                    <h3>Datos de su compra</h3>
                </div>
                <div>
                    {cart.map(product => <ItemCart key={product.id} product={product} />)}
                    <p>$ {formPrice}</p>
                </div>
            </div>
                <div>
                    <h2>COMPLETE LOS CAMPOS PARA FINALIZAR LA COMPRA </h2>
                </div>
                <div>
                    {!orderId && <form onSubmit={handleSubmit}>
                        <input type="text" name="Nombre" placeholder="Nombre" value={buyer.Nombre} onChange={handleInputChange} required></input>
                        <input type="email" name="Email" placeholder="Email" value={buyer.Email} onChange={handleInputChange} required></input>
                        <input type="number" name="Telefono" placeholder="Telefono" value={buyer.Telefono} onChange={handleInputChange} required></input>
                        <input type="text" name="Domicilio" placeholder="Domicilio" value={buyer.Domicilio} onChange={handleInputChange} required></input>
                        <input type="submit" value="Comprar" />
                    </form>
                    }
                    {orderId && <>
                    <h1> Felicitaciones tu compra se realizo con éxito</h1>
                    <h3> Tu numero de seguimiento es: {orderId}</h3>
                    </>}
                </div>

            </div>
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

export default Checkout