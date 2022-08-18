import React, { useState,} from 'react';


function ItemCount({onAdd}){

    const [numero, setNumero]= useState(0);

    const aumentar=() => {
        setNumero(numero+1)
    }
    const disminuir=() => {
        setNumero(numero-1);

        if(numero <= 0){
            setNumero(0)
        }
    }

    return(
        <>
            <div className='Conteiner-BtnCard'>

                <button className='Btn-Comprar' onClick={onAdd} >
                        Comprar Ahora
                </button>
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

            </div>
        </>
    )

}

export default ItemCount;