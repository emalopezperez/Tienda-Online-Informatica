import React, { useState, useEffect} from 'react';
import '../db'
import Db from '../db';
import {Fetch} from './Fetch'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


function ItemConteiner(){

    const[porducts, setProducts] = useState([]);
    const {category} = useParams();


    useEffect(() => {

        Fetch(Db)
            .then(res => {

                if(category){
                    setProducts(res.filter(producto => producto.category === category));
                }else{
                    setProducts(res)
                }
            })
    },[category]);

    if(porducts.length ===0){
        return(
            <h1 className='h1'>
                Cargando...
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