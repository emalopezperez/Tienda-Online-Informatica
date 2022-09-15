import { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {context} from './MyProvider ';
import Formulario from './Formulario'


    const Cart = () => {
    
      const { cartList, vaciarCarrito, borrarItem} = useContext(context)
      const [desplFormulario, setdesplFormulario] = useState(false)
    
      const vaciar= () =>{ 
        vaciarCarrito()
      }
    
      if(cartList.length > 0){
          return (
            <div className=''>
              <div className='Informacion-Cart'>
                <h2 className='h2'>
                  Informacion importante
                </h2>
                <p className='p' >
                  los medios de pagos con los que trabajamos son mediante Mercado de Pago, Trasferencia Bancaria o Efectivo.
                </p>
              </div>
              <div className="bg-gray-200 m-4 p-1 text-lg">
                <div className='flex direction-row   lg:justify-between text-black mt-10 ml-16'>
                  <li>Imagen</li>
                  <li>Nombre</li>
                  <li>Precio</li>
                  <li>Cantidad</li> 
                  <li>
                    <button className='btn-Limpiar' onClick={vaciar}>
                      Limpiar
                    </button>
                  </li>
                </div>
    
                {cartList.map((elemento ) => {
                    return <div className='flex direction-row justify-evenly  text-black mt-8 mb-5'> 
                                <div className='Cart-img'>
                                  <img key={elemento.id} alt={elemento.img} src={elemento.img} ></img>
                                </div>
                                <div>
                                  <h2 className="Nombre-Cart px-17">
                                  
                                    {elemento.nombre}
                                  </h2>
                                </div>
                                <div className='px-12'>
                                  <h2 className="Precio-Cart ">
                                    ${elemento.precio}
                                  </h2>
                                </div>
                                <div className='px-9'>
                                  <h2 className="Cantidad-Cart ">
                                    {elemento.cantidad}
                                  </h2>
                                </div>
                                <div>
                                  <button className="Btn-Eliminar px-1" onClick={()=>borrarItem(elemento.id)}>
                                      x
                                  </button>
                                </div>
                            </div>
                  }) }
    
              </div>
                  <div className='flex justify-center text-center mt-10'>
                      {
                        !desplFormulario ? <button className='btn-finalizarCompra' onClick={ ()=> setdesplFormulario(true)}> Finalizar Compra</button>  
                        : <Formulario/>
                      }
                  </div>
            </div>
    )}
    
      return (
        <section className="text-white bg-gray-900">
          <div className="px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                Su carrito de compras esta vacio
              </h1>
    
              <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                Ingrese a la Home para realizar sus compras!
              </p>
    
              <div className="flex flex-wrap justify-center mt-8 gap-4">
                <Link to={"/"}>
                  <button className='Volver-Home'>
                    Volver a la Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )
    }
    export default Cart