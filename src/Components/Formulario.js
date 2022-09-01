import React, { useState,useContext } from 'react';
import '../App.css';
import {context} from './MyProvider ';


const Formulario = () =>{

    const { cartList, ObtenerTotalPrecio} = useContext(context)
    
    const [informacionFinal, setInfomracionFinal] =useState('')

    const [ nombre, setNombre] =useState('')
    const [apellido,setApellido] = useState('')
    const [correo, setCorreo] = useState('')

    const [error,setError] = useState(false)
    
    const validacion = (e)=>{
        e.preventDefault()

        if([nombre, apellido, correo].includes('')){

            setError(true)

        }else{
            setError(false)

            const objetoInformacion= {
                nombre,
                apellido,
                correo,
                items:cartList,
                precioFinal: ObtenerTotalPrecio()
            }

        setInfomracionFinal([...informacionFinal,objetoInformacion])

        setNombre('')
        setApellido('')
        setCorreo('')
    }
}
console.log(informacionFinal)
return(
    <>
        <form onSubmit={validacion} className='shadow-md rounded-lg py-10 px-5 bg-gray-600 mb-8' >
            {
                error &&
                <h1 className="h1">
                    Todos los campos son obligatorios!
                </h1>
            }
            <div className='mb-6'>
                <label htmlFor='Nombre' className="block text-gray-600 font-bold" > Ingrese su Nombre</label>
                    <input
                        id ='Nombre'
                        type="text"
                        placeholder='Escribe tu Nombre'
                        className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-600 rounded-md'
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)}
                />
            </div>

            <div className='mb-6'>
                <label htmlFor='Apellido' className="block text-gray-600 font-bold" > Ingrese su Apellido</label>
                    <input
                        id ='Apellido'
                        type="text"
                        placeholder='Escribe su Apellido'
                        className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-600 rounded-md'
                        value={apellido}
                        onChange={(e)=> setApellido(e.target.value)}
                />
            </div>

            <div className='mb-6'>
                <label htmlFor='correo' className="text-gray-600 font-bold" > Ingrese su correo</label>
                    <input
                        id ='correo'
                        type="text"
                        placeholder='Ingrese su Correo'
                        className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-600 rounded-md'
                        value={correo}
                        onChange={(e)=> setCorreo(e.target.value)}
                />
            </div>

            <input
                type="submit"
                lassName='bg-indigo-200 w-full p-3 text-white cursor-pointer rounded-md'
                value="Enviar"
            />
        </form>
    
        </>  
    )
}
export default Formulario