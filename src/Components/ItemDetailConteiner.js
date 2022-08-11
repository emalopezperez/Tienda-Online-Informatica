
import React, { useState, useEffect} from 'react';
import { Fetch } from './Fetch';
import '../db'
import Db from '../db';
import ItemDetail from './ItemDetail';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";


const ItemDetailConteiner = () => {
const[porductsDetail, setProductsDetail] = useState([]);

    const  {id} = useParams()

    useEffect(() => {

        Fetch(Db)
            .then(dato =>{ setProductsDetail(dato.find(item => item.nombre === "LENOVO"))
        });
        
    },[id])
    console.log(useParams())
    
    return (
    <>
        {
            <ItemDetail
                porductsDetail={porductsDetail}
            />
        }
        
    </>
    )
}

export default ItemDetailConteiner