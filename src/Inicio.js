import React from "react";
import {NavLink} from 'react-router-dom';
import Handshake from './Img/handshake.jpeg';
import Apri from './Img/apri.jpg';
import Trp from './Img/transporte.png';
import Mek from './Img/mecanico.webp';
import Motos from './Img/motos.png';


const Productos = () => {
    return (
        <div className="allPageInicio">
            <div className="bodyHeaderInicio">
                <div className="txt-bd-hd-in">
                    <h2 className="tituloHeaderInicio">Comprá tu moto 0km con un click</h2>
                    <h3 className="subtituloHeaderInicio">El mercado necesitaba una innovación y vinimos a transformarlo</h3>
                    <p className="parrafoHeaderInicio"> Te garantizamos el mejor precio, calidad, financiación y variedad de productos del mercado en tiempo record.</p>
                    <NavLink className="catalogoHeaderInicio" to='/productos'>CATÁLOGO</NavLink>
                </div>
                <div className="img-bd-hd-in">
                    <img className="imgBody" src={Handshake} alt="handshake"/>
                </div>
            </div>

            <div className="carrouselCard dp-fx">
                <div className="cardA">
                    <img className="cardImg" src={Mek} alt="Mecanico controlando motovehiculo con averias"/>
                    <div className="">
                        <h2 className="cardH2 txtCenter textArticle">Riguroso estandar de calidad</h2>
                        <p className=" textArticle cl-bk-md txtCenter">Garantía mecánica por 30 días o 500km</p>
                    </div>
                </div>
                <div className="cardA">
                    <img className="cardImg" src={Motos} alt="Motos en venta con el mejor precio del pais"/>
                    <div className="textArticle">
                        <h2 className="cardH2 txtCenter textArticle">Los mejores usados del mercado</h2>
                        <p className=" textArticle cl-bk-md txtCenter">Usados seleccionados y revisados por nuestros mecanicos</p>
                    </div>
                </div>
                <div className="cardA">
                    <img className="cardImg" src={Trp} alt="Transporte motovehicular"/>
                    <div className="">
                        <h2 className="cardH2 txtCenter textArticle">Envíos a todo el país</h2>
                        <p className=" textArticle cl-bk-md txtCenter">Tu vehículo puerta a puerta</p>
                    </div>
                </div>
            </div>

            <div className="articleInicio bg-bl pd-mg">
                 <div className="textArticle">
                    <h2 className="tituloArticleInicio cl-wht-bld">ALQUILÁ</h2>
                    <p className="parrafoArticleInicio cl-wht-md">¿Querés vivir una experiencia inolvidable?</p>
                    <p className="parrafoArticleInicioMid cl-wht-md">Alquila una moto el tiempo que desees.</p>
                    <p className="parrafoArticleInicio cl-wht-md">Con mínimos requisitos podes disfrutar de un montón de beneficios.</p>                    </div>
                    <div className="imgArticleFiveInicio">
                        <img className="textArticle" src={Apri} alt="Aprilia RS4V"/>
                </div>
            </div>
                <div className="borderImgFin">
                    <div className="imgFin">
                        <div>
                            <h2 className="cl-wht-bld txtCenter bg-sz-shd">Financiamiento</h2>
                            <p className="cl-wht-md txtCenter md-sz-shd">Tomamos tu vehículo y te ofrecemos el financiamiento adecuado para vos</p>
                        </div>
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

export default Productos;