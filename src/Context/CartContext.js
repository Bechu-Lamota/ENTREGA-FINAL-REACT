import React from "react";
import { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, cantidad) => {
        if (inCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, cantidad: product.cantidad + cantidad } : product
            }));
        } else {
            setCart([...cart, {...item, cantidad }]);
        }
    }
    console.log(`carrito: `, cart)

    const clearCart = () => { setCart([]) }; //esto nos va a dar un carrito limpio

    const inCart = (id) => cart.find(product => product.id === id) ? true : false; //nos fijamos is esta en el carrito el producto
    
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id)); //Se fija en el carrito si hay un producto con el id seleccionado y lo elimina

    const totalPrecio = () => {
        return cart.reduce ((acc, act) => acc + act.cantidad * act.price, 0);
    }
    
    const totalProductos= () => cart.reduce((acc, productoActual) => acc + productoActual.cantidad, 0);

    return (
        <CartContext.Provider value={{ clearCart, inCart, removeProduct, addProduct, totalProductos, totalPrecio, cart }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;