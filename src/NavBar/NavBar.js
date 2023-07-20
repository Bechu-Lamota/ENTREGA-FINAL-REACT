import React, { useState } from "react";
import CartWidget from "./CartWidget";
import logo from "./gtreat.png"
import {Link, NavLink} from 'react-router-dom';

function NavBar() { 

    return (
        <div className="navBar">
            <div className="logoNavb">
                <Link to='/' className="btn-logo"><img src={logo} width={75} height={55}/></Link>
            </div>

            <div className="listLink">
                <ul className="ul-listNv">
                    <li><NavLink to='/productos' className="btn-listLink">Productos</NavLink></li>
                    <li><NavLink to='/contacto' className="btn-listLink">Contacto</NavLink></li>
                    <li><NavLink to='/otros' className="btn-listLink">Otros</NavLink></li>
                </ul>
            </div>

            <div className="cartLink">
                <Link to='/cart' className="btn-cartLink"><CartWidget/></Link>
            </div>
        </div>
    );
}

export default NavBar;