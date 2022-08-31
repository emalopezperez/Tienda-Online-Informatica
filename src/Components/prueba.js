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