import React, { useState,useContext } from 'react';
import '../App.css';
import {context} from './MyProvider ';


const Formulario = () => {
    const { cartList,ObtenerTotalPrecio} = useContext(context)

    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        correo: ''
    });

    const ObtenerDatosForm = (e)=>{

        setForm({
            ...form,[e.target.name] : e.target.value
        })
        
    }

    const confirmarCompra = (e)=>{
        e.preventDefault()
        
        const informacionFinal ={
            items:cartList,
            comprador: {...form},
            precioFinal: ObtenerTotalPrecio(),
        }

        console.log(informacionFinal)
    }

    return (

        <div>
            <form className="h1" onSubmit={confirmarCompra}>
                <input  className="h1" type="text"
                        placeholder ="Ingrese Nombre"
                        name ='nombre'
                        value={form.nombre}
                        onChange={ObtenerDatosForm }

                />
                <input className="h1" type="text" 
                        placeholder="Ingrese Apellido"
                        name ='apellido'
                        value={form.apellido}
                        onChange={ObtenerDatosForm }
                />
                <input className="h1" type="text" 
                        placeholder="Ingrese Correo Electronico"
                        name ='correo'
                        value={form.correo}
                        onChange={ObtenerDatosForm }
                
                />
                <button className="h1" type="submit">Confirmar compra</button>

                
            </form>
        </div>
    )
}

export default Formulario