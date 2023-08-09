import React from "react";
import {NavLink} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';


const Otros = () => {

    
    return (
        <div>
            <div>
                <h2><i class="bi bi-wrench"></i> Terminos y Condiciones</h2>
            </div>
            <div className="textArticle">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4>Accordion Item #1</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>TEXTO 1</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4>Accordion Item #2</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>TEXTO 2</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h4>Accordion Item #3</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>TEXTO 3</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h4>Accordion Item #2</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>TEXTO 4</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
            <div>
                <h2><i class="bi bi-newspaper"></i> Politicas de Privacidad</h2>
            </div>
            <div className="textArticle">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4>Accordion Item #1</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>TEXTO 1</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4>Accordion Item #2</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>TEXTO 2</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h4>Accordion Item #3</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>TEXTO 3</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h4>Accordion Item #2</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>TEXTO 4</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
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

export default Otros;