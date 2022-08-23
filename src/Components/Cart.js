
import { useContext} from 'react';
import { Link } from 'react-router-dom';
import {context} from './MyProvider ';



const Cart = () => {
  const { cartList, vaciarCarrito} = useContext(context)

const vaciar= () =>{
  vaciarCarrito()
}

const reusltado = cartList.map((producto) => producto.nombre)

  return (
    <>
      <div>
        <h1 className='h1'>
          {reusltado}
        </h1>
      </div>
      
      <button className="Btn-Disminuir" onClick ={vaciar}>
        vaciar carrito
      </button>
      
    </>
  )
}

export default Cart