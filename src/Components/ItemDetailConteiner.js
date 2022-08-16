
import React, { useState, useEffect} from 'react';
import { Fetch } from './Fetch';
import '../db'
import Db from '../db';
import ItemDetail from './ItemDetail';


import {
    useParams
} from "react-router-dom";


const ItemDetailConteiner = () => {
const {id} =useParams();


const[porductsDetail, setProductsDetail] = useState({});

    useEffect(() => {

        Fetch(Db)
            .then(dato =>{ setProductsDetail(dato.find(item => item.id ==id ))
        });
        
    },[id]);


    
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