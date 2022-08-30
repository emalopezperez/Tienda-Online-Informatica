
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {context} from './MyProvider ';
import ItemCount from './ItemCount';


const ItemDetail = ({products}) => {


    const [estadoBtn, setEstadoBtn]= useState(true);


    const { agregarProducto, verificarProductoExistente} = useContext(context)
    
    
    const onAdd= (numero)=>{
        
        products.cantidad = numero
        const {cantidad} = products;
        const {id} = products;
    
        verificarProductoExistente(id);
        agregarProducto(products,cantidad);
        setEstadoBtn(false); 
    }

    return (
    <>
        <div className='card-content card-contentDetail'>
            
                <div className='ContentImgDetail'>
                    <li >    
                        <img src={products.img} alt ={products.img} />
                    </li>
                </div>
                
                <div className='Info-Card infoDetail'>

                    <h1 className='Title-product Title-productDetail'>
                        <li key={products.nombre}>    
                                {products.nombre}
                        </li>
                    </h1>

                    <p className='Title-product Description'>
                        <li key={products.descripcion}>    
                                {products.descripcion}
                        </li>
                    </p>
                    <div className='Price-Card'>
                        <span>
                            <li key={products.precio}>    
                                   $ {products.precio}
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