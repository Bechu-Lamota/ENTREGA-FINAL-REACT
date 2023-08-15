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

return (
        <div className='botoneraCount'>
            <div className='btnSumaResta'>
                <button disabled={base <= 0} onClick={restar} className='btn'><h1>-</h1></button>
                <h3 className='visualCount'> {base} </h3>
                <button disabled={base >= stock} onClick={sumar} className='btn'><h1>+</h1></button>
            </div>
            <div className='btnCart' >
                <button disabled={base <= 0} onClick={() => onAdd(base)} className='btnAgrCart'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Count;