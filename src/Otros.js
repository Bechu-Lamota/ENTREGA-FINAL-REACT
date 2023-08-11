import React from "react";
import {NavLink} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';


const Otros = () => {

    
    return (
        <div className="pd-mg">
            <div className="">
                <h2 className="pd-mg pd-acc"><i class="bi bi-wrench"></i> Terminos y Condiciones</h2>
            </div>
            <div className="textArticle pd-mg">
            <Accordion defaultActiveKey="0" className="pd-acc">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4>1. General</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className="pd-acc">Los presentes Términos y Condiciones Generales (“Términos y Condiciones”) regulan el uso y la navegación del sitio, propiedad de la empresa <strong>NewBK</strong>, y los contenidos que en él se ofrecen.</p>
                        <p className="pd-acc">El acceso a cualquier parte y sección del <strong>Website</strong> previa aceptación sin reserva de estos Términos y Condiciones atribuye la condición de Usuario del Website a sus visitantes (en adelante, “Usuario/s”). Los Términos y Condiciones tienen carácter obligatorio y vinculante. En caso de que el <strong>Usuario</strong> no estuviera de acuerdo con las disposiciones incluidas en ellos, deberá abstenerse de acceder y utilizar el Website y sus contenidos.</p>
                        <p className="pd-acc">En caso de que una o más cláusulas de estos Términos y Condiciones se declarase nula por cualquier autoridad u órgano jurisdiccional competente, tal nulidad no afectará la validez de las restantes cláusulas contenidas en estos Términos y Condiciones, que mantendrán su plena vigencia y efecto.</p>
                        <p className="pd-acc">El acceso al <strong>Website</strong>  es totalmente gratuito, salvo en lo relativo a los costos de conexión por el uso de servicios de telecomunicaciones y de proveedores de Internet, que son ajenos a <strong>NewBK</strong> y que deberán ser soportados por el Usuario dependiendo del proveedor que contrate. Sin perjuicio de lo expuesto anteriormente, algunas secciones o contenidos del <strong>Website</strong> podrían ser exclusivos para clientes o usuarios registrados. A todo evento, se aclara que los clientes y usuarios registrados quedarán comprendidos en la categoría de <strong>Usuario</strong>, cuando accedan, utilicen o de cualquier otro modo, naveguen en el Website. Esas secciones o contenidos, así como otras distintas, pueden estar sujetas a Términos y Condiciones, reglamentos, o instrucciones particulares que, según el caso, sustituyen, modifican y/o complementan los presentes Términos y Condiciones, que también son de carácter obligatorio y vinculante.. De existir tales Términos y Condiciones, reglamentos, o instrucciones particulares les serán notificados a los Usuarios previo a que finalicen su registración, incluyéndose un link de acceso a los mismos.</p>
                        <p className="pd-acc">El <strong>Usuario</strong> entiende y acepta que cualquier falta de acción por parte de <strong>NewBK</strong> respecto del incumplimiento o violación de una o más disposiciones de los presentes Términos y Condiciones no implica conformidad con tal actitud, ni impide que en el futuro se persiga otra violación idéntica o similar.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4>2. Contenidos y usos permitidos.</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className="pd-acc">Toda la información incluida en el <strong>Website</strong> sobre los precios sugeridos de los productos y servicios está sujeta a cambios periódicos, derivados del proceso inflacionario y tales cambios serán reflejados en el <strong>Website</strong>.</p>
                        <p className="pd-acc">La información contenida en el <strong>Website</strong> ha sido diseñada para ser cierta, clara suficiente, detallada, amplia y actualizada. El <strong>Website</strong> podría eventualmente incluir información sobre productos o modelos de productos no comercializados en la República Argentina y de ser así ello será informado en cada caso.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h4>3. Modificación</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className="pd-acc">Cuando circunstancias no imputables a <strong>NewBK</strong> o no previstas en estos Términos y Condiciones o que constituyan caso fortuito o fuerza mayor lo justifiquen, <strong>NewBK</strong> podrá modificar estos Términos y Condiciones. Cualquier cambio en los Términos y Condiciones será informado en este <strong>Website</strong> previo a su implementación y en ningún caso afectará obligaciones previas asumidas por <strong>NewBK</strong>. En caso de que el Usuario no estuviera de acuerdo con las modificaciones incluidas en ellos, deberá abstenerse de acceder y utilizar el <strong>Website</strong> y a sus contenidos.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h4>4. Baja</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className="pd-acc">Si un <strong>Usuario</strong> registrado en el <strong>Website</strong> dejare de ingresar a él por más de ciento ochenta (180) días, <strong>NewBK</strong> dará de baja su registro como <strong>Usuario</strong>. La baja de Usuarios del registro no impedirá que esos <strong>Usuario</strong> vuelvan a registrarse en el <strong>Website</strong> en cualquier momento posterior.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
            <div className="">
                <h2 className="pd-mg pd-acc"><i class="bi bi-newspaper"></i> Politicas de Privacidad</h2>
            </div>
            <div className="textArticle pd-mg">
            <Accordion defaultActiveKey="0" className="pd-acc">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4>Responsabilidad</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className="pd-acc">NewBK es el responsable del tratamiento de los datos de los usuarios y de los visitantes de sus Plataformas.</p>
                        <p className="pd-acc">El responsable del tratamiento, <strong>es quien decide sobre el tratamiento de los datos personales</strong>. Para ello determina los fines o usos para los que se utilizará la información personal y los medios que serán utilizados para ese tratamiento.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4>Información</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className="pd-acc">NewBK recolecta tu información personal para que puedas disfrutar de nuestros servicios, y poder mejorarlos de manera continua.</p>
                        <p className="pd-acc">En algunos casos, la información la facilitá <strong>uno mismo</strong>, al registrarte o al proveer información cuando utilizás alguno de nuestros servicios. En otros, los recolectamos automáticamente, como cuando navegás por nuestras páginas y utilizás nuestros servicios. También podemos recolectar información acerca de vos de otras fuentes confiables. </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h4>Uso</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className="pd-acc">La recolección y tratamiento de tu información personal nos permite prestarte un excelente servicio para que puedas realizar operaciones de forma rápida y segura y ofrecerte funcionalidades que se adaptan mejor a tus necesidades. Salvo en casos establecidos por la normativa, los datos de usuario siempre se usarán para mejorar la experiencia del usuario. </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h4>Acuerdos</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className="pd-acc">El resguardo de tu privacidad es muy importante. Por ello, <strong>no vendemos ni comercializamos información que identifique a nuestros usuarios</strong>. Tampoco compartimos o transferimos de ningún otro modo tu información personal a terceros. </p>
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