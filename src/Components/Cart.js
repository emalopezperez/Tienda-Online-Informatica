
import { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {context} from './MyProvider ';
import Formulario from './Formulario'



const Cart = () => {

  const { cartList, vaciarCarrito, borrarItem} = useContext(context)


  const vaciar= () => vaciarCarrito();
  const [desplFormulario, setdesplFormulario] = useState(false)


    if(cartList.length > 0){
        return (

        <div>
            {
              cartList.map((elemento ,index ) => {

                return  <div> 
                            <div>
                              <img src={elemento.img} ></img>
                            </div>
                            <div>
                              <h2 className="h1">
                                {elemento.nombre}
                              </h2>
                            </div>
                            <div>
                              <h2 className="h1">
                                ${elemento.precio}
                              </h2>
                            </div>
                            <div>
                              <h2 className="h1">
                                {elemento.cantidad}
                              </h2>
                            </div>
                            <div>
                              <button className="h1" onClick={()=>borrarItem(elemento.id)}>
                                  x
                              </button>
                            </div>
                        </div>
                      })
            }
            <div>
              <button className='h1' onClick={vaciar}>
                vaciar carrito
              </button>
            </div>
            <div>
              {
                !desplFormulario ? <button className='h1' onClick={ ()=> setdesplFormulario(true)}> Ir al Checkout</button>
                : <Formulario/>
              }
            </div>
          </div>
          
)}

  return (

      <div>

        <div>
          <h1 className="h1">
            Carrito
          </h1>
        </div>

        <Link to={"/"}>
          <div>
            <button className='h1'>
              Ir a la Home
            </button>
          </div>
      </Link>
      </div>
  )
}

export default Cart