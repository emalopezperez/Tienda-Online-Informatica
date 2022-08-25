
import React from 'react';
import '../App.css';
import '../index.css'
import './ItemCount'
import './Cart'


import {Link} from "react-router-dom"

function Item({producto}) {

    return (
    <>
        <div className='card-content'>
            
            <div className='Info-Card'>
                <li >    
                    <img src={producto.img} alt ={producto.img} />
                </li>
                <h1 className='Title-product'>
                    <li key={producto.nombre}>    
                        {producto.nombre}
                    </li>
                </h1>
                <div className='Price-Card'>
                <span>
                    <li key={producto.precio}>    
                          $ {producto.precio}
                    </li>
                </span>
                </div>
                <div className='Contenedor-Btn-Comprar'>
                    <Link to={`/detalle/${producto.id}`}> 
                        <button className='Btn-Detalles' >Ver mas</button>  
                    </Link>
                </div>
            </div>

        </div>
    </>
    
    )
}

export default Item;
