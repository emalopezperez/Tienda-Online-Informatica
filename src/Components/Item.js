
import React from 'react';
import '../App.css';
import '../index.css'
import './ItemCount'
import {
    BrowserRouter as Router,
    Link,} from "react-router-dom";

function Item({producto}) {

    return (
    <>
        <div className='card-content'>
            
            <div className='Info-Card'>
                <li key={producto.img}>    
                    <img src={producto.img}/>
                </li>
                <h1 className='Title-product'>
                    <li key={producto.nombre}>    
                        {producto.nombre}
                    </li>
                </h1>
                <div className='Price-Card'>
                <span>
                    <li key={producto.precio}>    
                            {producto.precio}
                    </li>
                </span>
                </div>
                <div className='Contenedor-Btn-Comprar'>
                        
                        <button className='Btn-Comprar' >
                            Comprar 
                        </button>
                        
                    <Link to='/detalle/:id'>
                        <button className='Btn-Detalles' >
                            Ver mas
                        </button>
                    </Link>
                    </div>
            </div>

        </div>
    </>
    
    )
}

export default Item;
