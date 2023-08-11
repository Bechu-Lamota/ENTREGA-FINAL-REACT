import React from "react";
import CartWidget from "./CartWidget";
import logo from "./mt.png"
import {Link, NavLink} from 'react-router-dom';

function NavBar() { 

    return (
        <div className="navBar">
            <div className="logoNavb">
                <Link to='/' className="btn-logo"><img src={logo} width={100} alt="logo"/></Link>
            </div>
            <div className="opNv">
                <div className="dscpOpNv grA">
                    <NavLink to='/productos' className="btn-Link cl-bk-bld">Catalogo</NavLink>
                </div>
                <div className="dscpOpNv grB">
                    <Link to='/contacto' className="btn-Link cl-bk-bld">Contacto</Link>
                </div>
                <div className="dscpOpNv grC">
                    <Link to='/cart' className="btn-Link cl-bk-bld"><CartWidget/></Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;