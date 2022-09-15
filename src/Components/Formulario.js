import React, { useState,useContext } from 'react';
import '../App.css';
import {context} from './MyProvider ';
import {db} from "./Firebase"
import {collection,addDoc } from "firebase/firestore"
import MensajeFinalizado from './MensajeFinalizado';

const Formulario = () =>{

    const { cartList, ObtenerTotalPrecio, setCartList} = useContext(context)
    
    const [informacionFinal, setInfomracionFinal] =useState([])

    const [ nombre, setNombre] =useState('')
    const [apellido,setApellido] = useState('')
    const [correo, setCorreo] = useState('')

    const [error,setError] = useState(false)
    const [mensaje ,setMensaje]= useState(false)
    
    const validacion = (e)=>{
        e.preventDefault()

        if([nombre, apellido, correo].includes('')){

            setError(true)

        }else{
            setError(false)

            setNombre('')
            setApellido('')
            setCorreo('')
    }
}

const enviarBaseDatos= () =>{

    const order= {
        compra:cartList,
        nombre,
        apellido,
        correo,
        gastoTotal: ObtenerTotalPrecio(),
        fecha: new Date()
    }
    const orderCollection = collection(db, "orders")
    const consulta = addDoc(orderCollection,order)
    
    setMensaje(true)

    setInfomracionFinal([...informacionFinal, order])
    setCartList([]);
}

if(!mensaje){

return(
    <div className='content'>
        <div className='Informacion-Cart'>
            <h2 className='text-gray-800 text-2xl mb-11'>
                Para concretar con la compra le pedimos que deje Ingrese sus datos:
            </h2>
        </div>

        <form onSubmit={validacion} className='shadow-md rounded-lg py-3 px-5 bg-gray-200 mb-8' >
            {
                error &&
                <h1 className="text-black">
                    Todos los campos son obligatorios!
                </h1>
                
            }
            <div className='mb-6'>
                <label htmlFor='Nombre' className="block text-black text-left font-bold" > Ingrese su Nombre</label>
                    <input
                        id ='Nombre'
                        type="text"
                        placeholder='Escribe tu Nombre'
                        className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-300 rounded-md text-black'
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)}
                />
            </div>

            <div className='mb-6'>
                <label htmlFor='Apellido' className="block text-black font-bold text-left" > Ingrese su Apellido</label>
                    <input
                        id ='Apellido'
                        type="text"
                        placeholder='Escribe su Apellido'
                        className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-600 rounded-md text-black'
                        value={apellido}
                        onChange={(e)=> setApellido(e.target.value)}
                />
            </div>

            <div className='mb-6'>
                <label htmlFor='correo' className="text-black font-bold text-left" > Ingrese su correo</label>
                    <input
                        id ='correo'
                        type="text"
                        placeholder='Ingrese su Correo'
                        className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-800 rounded-md text-black'
                        value={correo}
                        onChange={(e)=> setCorreo(e.target.value)}
                />
            </div>

            <input
                type="submit"
                className=' w-full p-3 text-black cursor-pointer rounded-md'
                value="Enviar"
                onClick={enviarBaseDatos}
            />
        </form>
    </div>

)} else {
            return(
                    <MensajeFinalizado
                        informacionFinal={informacionFinal}
                    />
        )
    }
}
export default Formulario