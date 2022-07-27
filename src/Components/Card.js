import React, { useState } from 'react';
import '../App.css';
import '../index.css'



function Card({nombre,precio}) {

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

    return (
    <>
        <div className="card-content">
            
            <div className='Title-product'>
                <h1>{nombre}</h1>
            </div>

            <div className='Info-Card'>
                <p className='Description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia necessitatibus earum, vitae suscipit delectus placeat repudiandae minus quos. Ipsam eveniet placeat assumenda mollitia soluta perspiciatis velit et error enim!
                </p>
                <h2 className='Price-Card'>
                    {precio}
                </h2>
            
            <div className='Conteiner-BtnCard'>

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
        </div>
    </>
    
    )
}
export default Card;

