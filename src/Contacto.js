import React from "react";
import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="contacto bg-gy">
        <div className="cntInd">
            <div className="bg-wh">
                <div className="cntInd cntReemb">
                    <h2 className="cnt-Bk cl-bk-bld btn-Link"><i className="bi bi-clipboard-minus ic-ct"></i> Reembolso</h2>
                    <p>Existirá <strong>reembolso</strong> siempre que se determine que un cargo deba ser revertido. En este caso, las cantidades abonadas por el <strong>Usuario</strong> serán reintegradas en su totalidad. El cliente recibirá en su cuenta o en el extracto de su tarjeta de crédito el monto pagado por la compra de un determinado bien, bienes o servicio.</p>
                    <p>Se debe tener en cuenta que, ante un reembolso:</p>
                    <ul>
                        <li>El plazo de devolución del pago puede demorarse hasta 210 días corridos posteriores a la fecha de aprobación.</li>
                        <li>El reembolso deberá ser aprobado y se controlarán los métodos de pago utilizados para confeccionar la operación.</li>
                        <li>Si se abono con tarjeta de crédito, el monto se reembolsará a la misma. Si se abono por otros métodos se redimirá a la cuenta de origen.</li>       
                     </ul>
                </div>
                <div className="cntInd cntCancel">
                    <h2 className="cnt-Bk cl-bk-bld btn-Link"><i className="bi bi-clipboard2-x ic-ct"></i> Cancelación</h2>
                    <p>Se procedera a <strong>cancelar</strong> todas aquellas transacciones que no se puedan corroborar o aprobar por algún motivo. En este caso, considerando que la transacción no fue procesada y <strong>NewBK</strong> no recibió monto alguno, la compra se cancelará y sin incurrir en cargo alguno.</p>
                    <p>Antes de cancelar la compra, se debe tener en cuenta:</p>
                    <ul>
                        <li>Solo se podrá cancelar una compra si la compra se encuentra <strong>PENDIENTE</strong>, <strong>EN PROCESO</strong> o dentro de las <strong>24 HORAS</strong> posteriores a ser aprobada la transacción. Estos estados se podrán visualizar facilmente en <strong> MIS COMPRAS</strong>.</li>
                        <li>Si se procede a realizar una transacciones y no se confirma el método de pago, la transacción se cancelará a las 48hs. Podrá sufrir una actualización de precios. La misma aparecerá en su historial como <strong>CANCELADA</strong> o <strong>EXPIRADA</strong>.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="cntInd">
             <h2 className="cnt-Bk cl-bk-bld btn-Link"><i className="bi bi-envelope-exclamation ic-ct"></i> Boton de Arrepentimiento</h2>
             <p> Dentro del plazo de 24hs, analizaremos su solicitud y le brindaremos una respuesta.</p>
             <div className="bg-wh txtInd">
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="txtInd">
                    <div className="flexForm">
                    <Form.Group controlId="validationCustom01" className="A">
                        <Form.Control required type="text" placeholder="Nombre*" />
                            <Form.Control.Feedback type="invalid">
                                Campo incompleto
                            </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom02" className="B">
                        <Form.Control required type="text" placeholder="Apellido*" />
                            <Form.Control.Feedback type="invalid">
                                Campo incompleto
                            </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom03" className="C">
                      <Form.Control type="text"  placeholder="Usuario*" required />
                      <Form.Control.Feedback type="invalid">
                                Campo incompleto
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustomUsername" className="D">
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control type="email"  placeholder="Email*"  aria-describedby="inputGroupPrepend" required />
                            <Form.Control.Feedback type="invalid">
                                Campo incompleto
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="validationCustom04" className="E">
                      <Form.Control type="number" placeholder="Código Postal*" required />
                        <Form.Control.Feedback type="invalid">
                            Campo incompleto
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom05" className="F">
                      <Form.Control type="text" placeholder="Motovehículo*" required />
                        <Form.Control.Feedback type="invalid">
                            Campo incompleto
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom03" className="G">
                        <Form.Control type="text"  placeholder="Condición*" required width={60} />
                            <Form.Control.Feedback type="invalid">
                                Campo incompleto
                            </Form.Control.Feedback>
                        </Form.Group>
                    <Form.Group controlId="validationCustom03" className="H">
                        <Form.Control type="text"  placeholder="Detalle*" />
                    </Form.Group>
                    </div>
                    <div className="bg-wh txtInd txt-bd-hd-in">
                    <Form.Group className="check txtInd">
                        <Form.Check required label="Acepto los Términos y condiciones." feedback="Debe aceptar los Términos y Cóndiciones." feedbackType="invalid" />
                    </Form.Group>
                    <Button type="submit" className="btnEnviar mg-bt">Enviar Datos</Button>
                    </div>
                </Form>
        </div>
        <div className="alert">
            <p className="cntInd">
              Le informamos que los datos que Usted nos provea a través de este sitio web serán 
              almacenados en una base de datos a fin de registrar su consulta, 
              el motivo de su contacto y para enviarle información sobre nuevos productos de 
              NewBK S.A. o sobre aquellos productos que 
              Usted hubiera adquirido de nuestra compañía. Recuerde que como titular 
              de los datos tiene el derecho de acceder a ellos en forma gratuita 
              a intervalos no inferiores a seis meses y solicitar su corrección, 
              actualización o eliminación del banco de datos en el que se encuentren. 
              La Dirección Nacional de Protección de Datos Personales, 
              tiene la atribución de atender las denuncias y reclamos que se interpongan con relación 
              al cumplimiento de las normas en materia de datos.
            </p>
        </div>

    </div>
        <div className="footer">
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
    </div>
  );
}

export default FormExample;