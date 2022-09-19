import { useState } from 'react'
import {db} from "./Firebase"
import {collection, addDoc } from "firebase/firestore"
import {Toaster, toast}from 'react-hot-toast'

const Contacto = () => {

    const datosIniciales ={
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
    }
    const [datos, setDatos] = useState(datosIniciales)

    const handleImputChange = (e) =>{
        const {name , value} =e.target;

        setDatos({
            ...datos, [name]:value
        })
    }
    
    const handleSubmit= (e)=>{
        e.preventDefault()

        if(datos.correo === ''|| datos.nombre === "" || datos.asunto === "" || datos.mensaje === ""){

            toast.error('Error, todos los campos son obligatorios', {
                duration: 2000,}
                )

        }else{
            const orderCollection = collection(db, "usuarios")
            const consulta = addDoc(orderCollection, datos)

            setDatos({...datosIniciales})

            toast.success('Gracias por comunicarse con nosotros', {
                duration: 1000,}
                )
        }   
    }

return (
<>  
    <Toaster/>
    <div className='text-black m-8 text-5xl'>
        <h2>
            Contacto
        </h2>
    </div>
    <div className='flex gap-3 basis-full flex-wrap sm:flex-nowrap'>
        <div className='w-full  p-4 bg-black '>
        <div className='content'>
        

        <div className='Informacion-Cart'>
            <h2 className='text-white text-2xl mb-11 py-2'>
                COMUNÍCATE CON NOSOTROS
            </h2>
        </div>

        <form onSubmit={handleSubmit} className='shadow-md rounded-lg py-3 px-5 bg-gray-200 mb-8' >
            
            <div className='mb-6'>
                <label htmlFor='Nombre' className="block text-black text-left font-bold" > Ingrese su Nombre</label>
                    <input
                        id ='Nombre'
                        type="text"
                        className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-300 rounded-md text-black'
                        onChange={handleImputChange}
                        name='nombre'
                        value={datos.nombre}
                />
            </div>

            <div className='mb-6'>
                <label htmlFor='correo' className="text-black font-bold text-left" > Ingrese su correo</label>
                    <input
                        id ='correo'
                        type="text"
                        className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-800 rounded-md text-black'
                        onChange={handleImputChange}
                        name='correo'
                        value={datos.correo}
                />
            </div>

            <div className='mb-6'>
                <label htmlFor='asunto' className="text-black font-bold text-left" > Asunto</label>
                    <input
                        id ='asunto'
                        type="text"
                        className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-800 rounded-md text-black'
                        onChange={handleImputChange}
                        name='asunto'
                        value={datos.asunto}
                />
            </div>

            <div className='mb-6'>
                <label htmlFor='mensaj' className="text-black font-bold text-left" > Mensaje</label>
                    <textarea
                        id ='mensaje'
                        type="textearea"
                        className='border-3 w-full p-2 mt-2 placeholder:border-t-gray-800 rounded-md text-black'
                        onChange={handleImputChange}
                        name='mensaje'
                        value={datos.mensaje}
                />
            </div>

            <input
                type="submit"
                className=' w-full p-3 text-black cursor-pointer rounded-md '
                value="Enviar"
                
            />
        </form>
        </div>
        </div>


        <div className='w-full  p-4 bg-black '>
            <div>
                <div className='flex flex-wrap m-4'>
                    <div>
                        <h1 className='py-2'>PREGUNTAS Y SUGERENCIAS</h1>
                        <p className='py-8'>
                            En Hering Hardware Store buscamos la mejor experiencia para nuestros clientes.
                            Sabemos lo que es estar de un lado y del otro del mostrador y, por lo tanto, que cada experiencia, inquietudes y necesidades son únicas.
                        </p>
                        <p>
                            Si ya has revisado nuestro apartado de Preguntas Frecuentes y no has encontrado respuesta, agradecemos te contactes con nosotros de forma directa, de manera que podamos ayudarte lo antes posible.

                            Además, toda sugerencia es bienvenida. Apuntamos a mejorar día a día para brindarte lo mejor.
                        </p>
                        <p className='py-10'>
                            Desde ya, ¡muchas gracias!
                            El equipo de HERING.
                        </p>
                    </div>
                    <div>
                        <h2 className='m-2 py-12'>
                            OTROS MEDIOS
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default Contacto