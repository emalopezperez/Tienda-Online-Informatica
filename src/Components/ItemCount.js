import React, { useState,} from 'react';


function ItemCount() {

    const [numero, setNumero]= useState(0);

    const aumentar= ()=> {
        setNumero(numero+1)
    }
    const disminuir= ()=> {
        setNumero(numero-1);

        if(numero <= 0){
            setNumero(0)
        }
    }

    return(
        <>
            <div className='Conteiner-BtnCard'>
                <div className='Conteiner-BtnCardAumDismi'>
                    <button className='Btn-Aumentar' onClick={aumentar}>
                    +
                    </button>
                    <h3 className='Resultado-Aumentador'>
                    {numero}
                    </h3>
                    <button className='Btn-Disminuir' onClick={disminuir}>
                    -
                    </button>
                </div>
                <div className='Contenedor-Btn-Comprar'>
                    <button className='Btn-Comprar' >
                        Comprar
                    </button>
                    <button className='Btn-Detalles' >
                        Detalles
                    </button>
                </div>
               
            </div>
        </>
    )

}

export default ItemCount;