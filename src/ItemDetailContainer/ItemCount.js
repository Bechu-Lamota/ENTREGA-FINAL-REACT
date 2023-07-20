import React from 'react'
import { useState, useEffect } from 'react';

const Count = () => {
    const [base, variar] = useState(0);

    const sumar = () => {
        variar(base + 1);
    }

    const restar = () => {
        variar(base - 1);
    }

    //Ponemos un useEffect para que cada vez que agregue al carrito se ponga en cero base
    useEffect(() => {
        variar(parseInt(base));
    }, [base])
//No me funcionó.

return (
        <div className='botoneraCount'>
            <div className='btnSumaResta'>
                <button disabled={base <= 0} onClick={restar} className='btnResta'>Restar</button>
                <h3 className='visualCount'> {base} </h3>
                <button disabled={base >= 10} onClick={sumar} className='btnSuma'>Sumar</button>
            </div>
            <div className='btnCart' >
                <button className='btnAgrCart' >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Count;