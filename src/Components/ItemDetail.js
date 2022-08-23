
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {context} from './MyProvider ';
import ItemCount from './ItemCount';


const ItemDetail = ({porductsDetail}) => {

    const [estadoBtn, setEstadoBtn]= useState(true);


    const { agregarProducto, verificarProductoExistente} = useContext(context)
    

    const onAdd= (numero)=>{
        porductsDetail.cantidad = numero
        const {cantidad} = porductsDetail;
        const {id} = porductsDetail;
    
        verificarProductoExistente(id);
        agregarProducto(porductsDetail,cantidad);
        
        setEstadoBtn(false); 
    }

    return (
    <>
        <div className='card-content card-contentDetail'>
            
                <div className='ContentImgDetail'>
                    <li >    
                        <img src={porductsDetail.img} alt ={porductsDetail.img} />
                    </li>
                </div>
                
                <div className='Info-Card infoDetail'>

                    <h1 className='Title-product Title-productDetail'>
                        <li key={porductsDetail.nombre}>    
                                {porductsDetail.nombre}
                        </li>
                    </h1>

                    <p className='Title-product Description'>
                        <li key={porductsDetail.descripcion}>    
                                {porductsDetail.descripcion}
                        </li>
                    </p>
                    <div className='Price-Card'>
                        <span>
                            <li key={porductsDetail.precio}>    
                                    {porductsDetail.precio}
                            </li>
                        </span>
                    </div>
                    </div>
                    
                    {
                        estadoBtn? <ItemCount onAdd={onAdd}/>
                            :
                        <Link to={'/category/Cart'}>
                            <div className='Contenedor-Btn-Comprar'>
                                <button className='Btn-Comprar'> ir al carrito</button>
                            </div>
                        </Link>
                        
                    }
                    
            </div>
</>
        
        )
    
}

export default ItemDetail