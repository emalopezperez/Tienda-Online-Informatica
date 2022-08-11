
import ItemCount from './ItemCount';


const ItemDetail = ({porductsDetail}) => {



    return (
    <>
        <div className='card-content card-contentDetail'>
            
                <div className='ContentImgDetail'>
                    <li key={porductsDetail.img}>    
                        <img src={porductsDetail.img}/>
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
                    <ItemCount/>
                    <div className='Contenedor-Btn-Comprar'>
                        
                        <button className='Btn-Comprar' >
                            Comprar Ahora
                        </button>
                    </div>
                </div>
            </div>
</>
        
        )
    
}

export default ItemDetail