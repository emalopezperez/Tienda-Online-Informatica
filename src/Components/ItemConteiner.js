import React, { useState, useEffect} from 'react';
import '../db'
import Db from '../db';
import {Fetch} from './Fetch'
import ItemList from './ItemList';



function ItemConteiner(){

    const[porducts, setProducts] = useState([]);

    useEffect(() => {

        Fetch(Db)
            .then(dato => setProducts(dato)) 
    },[]);

    if(porducts.length ===0){
        return(
            <h1 className='P'>
                Cargando..
            </h1>
        )
    }else{
        return(
            <>
                <ItemList
                    porducts={porducts}
                />
            </>
        )
    }

    
}

export default ItemConteiner;