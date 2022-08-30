
import { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {context} from './MyProvider ';
import Formulario from './Formulario'
import {db} from "./Firebase"
import {collection, doc,getDoc } from "firebase/firestore"



const Cart = () => {

  const { cartList, vaciarCarrito, borrarItem} = useContext(context)
  const vaciar= () => vaciarCarrito();
  const [desplFormulario, setdesplFormulario] = useState(false)


    if(cartList.length > 0){
        return (
        <div >
          <div className='Informacion-Cart'>
            <h2 className='h2'>
              Informacion importante
            </h2>
            <p className='p' >
              los medios de pagos con los que trabajamos son mediante Mercado de Pago, Trasferencia Bancaria o Efectivo.
            </p>
          </div>
          <div className='contenedorTabla'>
            <table className='tablaCart'>
                  <thead>
                      <tr className='contenedorTabla'>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <div className="Contenendor-btn-Limpiar">
                              <button className='btn-Limpiar' onClick={vaciar}>
                                Limpiar
                              </button>
                          </div>
                      </tr>
                  </thead>    
              </table> 
          </div>
          
            {cartList.map((elemento ,index ) => {

                return  <div className='Contenedor-Cart'> 
                            <div className='Cart-img'>
                              <img src={elemento.img} ></img>
                            </div>
                            <div>
                              <h2 className="Nombre-Cart">
                                {elemento.nombre}
                              </h2>
                            </div>
                            <div>
                              <h2 className="Precio-Cart">
                                ${elemento.precio}
                              </h2>
                            </div>
                            <div>
                              <h2 className="Cantidad-Cart">
                                {elemento.cantidad}
                              </h2>
                            </div>
                            <div>
                              <button className="Btn-Eliminar" onClick={()=>borrarItem(elemento.id)}>
                                  x
                              </button>
                            </div>
                        </div>
                      })
            }
            
            <div>
              {
                !desplFormulario ? <button className='btn-finalizarCompra' onClick={ ()=> setdesplFormulario(true)}> Finalizar Compra</button>
                : <Formulario/>
              }
            </div>
          </div>
          
)}

  return (

      <div>

        <div>
          <h1 className="h1">
            Su Carrito se encuentra Vacio!!!
          </h1>
        </div>

        <Link to={"/"}>
          <div>
            <button className='Volver-Home'>
              Volver a la Home
            </button>
          </div>
      </Link>
      </div>
  )
}

export default Cart