/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../App.css';
import '../index.css'
import './ItemCount'
import ItemCount from './ItemCount';

function Item({producto}) {

    return (
    <>
        <div className='card-content'>
            <div className='Info-Card'>
                
                <img src={producto.img}/>

                <h1 className='Title-product'>
                    {producto.nombre}
                </h1>
                <div className='Price-Card'>
                <span>
                        {producto.precio}
                    </span>
                </div>

                <div className='Conteiner-BtnCard'>
                    
                    <ItemCount/>
                </div>
            </div>
        </div>
    </>
    
    )
}

export default Item;
