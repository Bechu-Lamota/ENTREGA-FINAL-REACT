import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './Contacto';
import Error from './Error';
import Otros from './Otros';
import Inicio from  './Inicio';
import Cart from  './Cart';
import Productos from  './ItemListContainer/ItemListContainer';
import Detalle from './ItemDetailContainer/ItemDetailContainer';
import CartProvider from './Context/CartContext';
import Checkout from './Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path={"/productos"} element={<Productos/>} />
        <Route path={"/item/:id"} element={<Detalle/>} />
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/otros' element={<Otros/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </CartProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
