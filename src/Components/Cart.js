import { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {context} from './MyProvider ';
import Formulario from './Formulario'
import CartVcio from './CartVcio'


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
          <div className='flex  justify-center m-10 text-black mt-14 flex-row'>
              <div className='px-5'>
                <h2>Nombre</h2>
              </div>
              <div className='px-12'>
                <h2>Precio</h2>
              </div>
              <div className='px-10'>
                <h2>Cantidad</h2>
              </div> 
          </div>   

          {cartList.map((elemento, index ) => {
                return <div key={index} className='flex m-5 justify-center flex-row '>  
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
                              <button className="Btn-Eliminar mx-10" onClick={()=>borrarItem(elemento.id)}>
                                  Eliminar
                              </button>
                            </div>
                        </div>
                      })
              }
              <div className='flex justify-left'>
                <button className='btn-Limpiar m-3 px-3 bg-emerald-900 ' onClick={vaciar}>
                  Vaciar carrito
                </button>
              </div>
              <div className='flex justify-center mt-15'>
                <Link to={'/formulario'}>
                  <button className='btn-finalizarCompra'>Finalizar Compra</button>
                </Link>
              </div>
          </div>
)}

  return (
    <CartVcio/>
  )
}

export default Cart