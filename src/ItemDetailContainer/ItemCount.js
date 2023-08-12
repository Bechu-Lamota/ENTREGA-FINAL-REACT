import React, { useState, useEffect } from 'react'

const Count = ({inicial, stock, onAdd}) => {
    const [base, variar] = useState(inicial);

    const sumar = () => {
        variar(base + 1);
    }

    const restar = () => {
        variar(base - 1);
    }

    //Ponemos un useEffect para que cada vez que agregue al carrito se ponga en cero base
    useEffect(() => {
        variar(parseInt(inicial));
    }, [inicial])
//No me funcionó.

return (
        <div className='botoneraCount'>
            <div className='btnSumaResta'>
                <button disabled={base <= 1} onClick={restar} className='btnResta'>Restar</button>
                <h3 className='visualCount'> {base} </h3>
                <button disabled={base >= stock} onClick={sumar} className='btnSuma'>Sumar</button>
            </div>
            <div className='btnCart' >
                <button disabled={base <= 1} onClick={() => onAdd(base)} className='btnAgrCart'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Count;